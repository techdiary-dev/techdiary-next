import React, { PropsWithChildren } from "react";
import BaseLayout from "./BaseLayout";
import { Container, Grid } from "@mantine/core";

interface Props {
  LeftSidebar?: React.ReactNode;
  RightSidebar?: React.ReactNode;
}
const ThreeColumnLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  LeftSidebar,
  RightSidebar,
}) => {
  return (
    <BaseLayout>
      <Container size={"xl"}>
        <div className="layout">
          {LeftSidebar && (
            <aside className="layout__aside layout__aside--left">
              <div className="layout__aside__inner">{LeftSidebar}</div>
            </aside>
          )}

          <div className="layout__main app-border-color">{children}</div>

          {RightSidebar && (
            <div className="layout__aside layout__aside--right overflow-y-auto">
              <div className="layout__aside__inner">{RightSidebar}</div>
            </div>
          )}
        </div>
      </Container>
    </BaseLayout>
  );
};

export default ThreeColumnLayout;
