import Link from "next/link";
import React from "react";
import DarkLogo from "../logos/DarkLogo";
import SearchInput from "./SearchInput";
import NavbarAction from "./NavbarAction";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="navbar app-border-color">
        <div className="navbar__inner wrapper">
          <div className="navbar__left">
            <Link href="/" className="inline-block">
              <DarkLogo className="navbar__logo" />
            </Link>
          </div>
          <SearchInput />
          <NavbarAction />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
