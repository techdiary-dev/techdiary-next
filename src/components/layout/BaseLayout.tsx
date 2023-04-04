import Link from "next/link";
import React, { Children, PropsWithChildren } from "react";
import DarkLogo from "../logos/DarkLogo";
import Navbar from "../navbar/Navbar";

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {" "}
      <Navbar />
      <div>{ children}</div>
    </div>
  );
};

export default BaseLayout;
