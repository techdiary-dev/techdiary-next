"use client";
import React, { PropsWithChildren } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import { MantineProvider } from "@mantine/core";

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <MantineProvider>{children}</MantineProvider>
    </ReactQueryProvider>
  );
};

export default AppProvider;
