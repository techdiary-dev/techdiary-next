import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { MantineProvider, createEmotionCache } from "@mantine/core";

import "@/styles/app.scss";
import { techdiaryEmotionCache } from "@/utils/emotion-cache";

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
          primary: [
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
          ],
        },
        primaryColor: "primary",
      }}
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
