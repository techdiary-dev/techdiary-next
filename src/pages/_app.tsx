import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { MantineProvider, createEmotionCache } from "@mantine/core";

import { api } from "@/utils/api";

import "@/styles/app.scss";
import { techdiaryEmotionCache } from "@/utils/emotion-cache";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <MantineProvider
      emotionCache={techdiaryEmotionCache}
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );

  //  return (
  //    <SessionProvider session={session}>
  //      <Component {...pageProps} />
  //    </SessionProvider>
  //  );
};

// export default api.withTRPC(MyApp);
export default MyApp;
