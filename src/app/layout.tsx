import { queryClient } from "@/utils/query-client";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@/styles/app.scss";

import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import AppProvider from "@/providers/AppProvider";
import BaseLayout from "@/components/layout/BaseLayout";

export const metadata = {
  title: "Techdiary - A place to share your knowledge",
  description: "Techdiary is a place to share your knowledge.",
};

const layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AppProvider>
          <BaseLayout>{children}</BaseLayout>
        </AppProvider>
      </body>
    </html>
  );
};

export default layout;
