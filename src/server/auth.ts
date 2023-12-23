import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";
import { httpClient } from "@/http/http.client";
import { IUserFullDetails } from "@/http/models/user.model";
import GithubProvider from "next-auth/providers/github";
import { env } from "@/env.mjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      accessToken: string;
      details?: IUserFullDetails;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, user, token }) {
      session.user.accessToken = token.accessToken as string;
      if (session?.user?.accessToken) {
        try {
          const res = await httpClient.get("/profile/me", {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          });
          session.user.details = res.data;
        } catch (error) {
          // @ts-ignore
          session = null;
          return session;
        }
      }
      return session;
    },
    signIn({ user }) {
      console.log("h=signIn", user);
      return true;
    },
    async jwt({ token }) {
      try {
        if (token.accessToken === undefined) {
          const { data } = await httpClient.post("/tokens/token-by-secret", {
            oauth_uid: token.sub,
            oauth_provider: "github",
            email: token?.email,
            name: token?.name,
            image: token.picture,
            secret: "secret",
          });
          return Promise.resolve({
            ...token,
            accessToken: data.access_token,
          });
        } else {
          return Promise.resolve({
            ...token,
          });
        }
      } catch (error) {
        console.log("h=jwt", error);
        return token;
      }
    },
  },
  // adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_APP_ID,
      clientSecret: env.GITHUB_APP_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  events: {
    signOut({ token }) {
      httpClient
        .delete("/tokens/current", {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        })
        .finally(() => {
          console.log("Token revoked");
        });
    },
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
