import React, { PropsWithChildren } from "react";
import Navbar from "../navbar/Navbar";
import { Container, Grid } from "@mantine/core";

interface Props {
  LeftSidebar?: React.ReactNode;
  RightSidebar?: React.ReactNode;
}

const BaseLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  LeftSidebar,
  RightSidebar,
}) => {
  return (
    <>
      <Navbar />
      <Container size={"xl"}>
        <Grid>
          {LeftSidebar && <Grid.Col span={3}>{LeftSidebar}</Grid.Col>}
          <Grid.Col md={6} span={12} className="bg-red-500">
            {children}
          </Grid.Col>
          {RightSidebar && (
            <Grid.Col span={3} className="hidden md:block">
              {RightSidebar}
            </Grid.Col>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default BaseLayout;
