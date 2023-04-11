import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { MantineProvider } from "@mantine/core";
import { Provider as JotaiProvider, useAtom } from "jotai";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Notifications } from "@mantine/notifications";
import "@/styles/app.scss";
import { techdiaryEmotionCache } from "@/utils/emotion-cache";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/query-client";
import { SessionProvider, getSession } from "next-auth/react";
import { useEffect } from "react";
import { sesionUserStatusAtom, sessionUserAtom } from "@/store/user.stom";
const brandColorShades: (string | undefined)[] = [
  "#F5F6FF",
  "#E6E9FF",
  "#CCD4FF",
  "#AEBAFE",
  "#8A9CFE",
  "#768BFE",
  "#627AFE",
  "#4964FD",
  "#2646FD",
  "#0221D4",
];

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [, setSessionUser] = useAtom(sessionUserAtom);
  const [, sessionUserStatus] = useAtom(sesionUserStatusAtom);
  useEffect(() => {
    sessionUserStatus("loading");
    getSession()
      .then((session) => {
        setSessionUser(session?.user.details!);
        sessionUserStatus("authenticated");
      })
      .catch(() => {
        sessionUserStatus("unauthenticated");
      });
  }, []);

  return (
    <MantineProvider
      emotionCache={techdiaryEmotionCache}
      theme={{
        // colorScheme: "dark",
        primaryShade: 4,
        colors: {
          // @ts-ignore
          primary: brandColorShades,
        },
        primaryColor: "primary",
      }}
    >
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
          <Notifications />
        </QueryClientProvider>
      </SessionProvider>
    </MantineProvider>
  );
};

// export default api.withTRPC(MyApp);
export default MyApp;
