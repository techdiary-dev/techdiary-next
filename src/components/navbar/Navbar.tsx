import Link from "next/link";
import React from "react";
import DarkLogo from "../logos/DarkLogo";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="navbar app-border-color">
        <div className="navbar__inner wrapper">
          <div className="navbar__left">
            <button
              className="navbar__hambargur-button"
              // onClick="triggerSidebar(true)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="navbar__hambargur-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link href="/" className="inline-block">
              <DarkLogo className="navbar__logo" />
            </Link>
          </div>
          <SearchInput/>
          {/* <navbar-search-input
                :popupOpen="isSearchPopupOpen"
                @close="isSearchPopupOpen = false"
            />
            <Navbar-Links @searchPopup="isSearchPopupOpen = true" /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
