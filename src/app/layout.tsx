import "@/styles/app.scss";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";

import BaseLayout from "@/components/layout/BaseLayout";
import AppProvider from "@/providers/AppProvider";
import { PropsWithChildren } from "react";

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
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
