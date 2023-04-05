import React, { HtmlHTMLAttributes } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";

const NavbarAction = () => {
  return (
    <div className="flex gap-2 md:gap-6">
      <div className="flex items-center gap-1">
        <button>
          <IconHome />
        </button>
        <button>
          <IconMoon />
        </button>
      </div>
      <NewDiaryButton />
    </div>
  );
};

export default NavbarAction;

// ------------------- New Diary Button -------------------
interface NewDiaryButtonProps {
  onPlusClick?: () => void;
}
const NewDiaryButton: React.FC<NewDiaryButtonProps> = ({ onPlusClick }) => (
  <button
    onClick={onPlusClick}
    className="items-center hidden px-4 py-1 space-x-2 rounded-full bg-primary lg:flex"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      ></path>
    </svg>{" "}
    <span className="text-white">নতুন ডায়েরি</span>
  </button>
);

// ------------------- Icons -------------------
const IconHome = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 text-gray-500 dark:text-slate-400"
    data-v-35a3619a
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      data-v-35a3619a
    />
  </svg>
);

const IconMoon = () => (
  <svg
    data-v-35a3619a
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 text-gray-500 dark:text-slate-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);
