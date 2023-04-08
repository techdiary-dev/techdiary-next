import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { MantineProvider, createEmotionCache } from "@mantine/core";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/app.scss";
import { techdiaryEmotionCache } from "@/utils/emotion-cache";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/query-client";
import { SessionProvider } from "next-auth/react";
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
  return (
    <MantineProvider
      emotionCache={techdiaryEmotionCache}
      theme={{
        colorScheme: "light",
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
        </QueryClientProvider>
      </SessionProvider>
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
