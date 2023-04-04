import React from "react";

const NavbarAction = () => {
  return (
    <div className="flex gap-2 md:gap-6">
      <div className="action" data-v-35a3619a>
        <button className="action__button action__button--home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="action__icon"
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
        </button>{" "}
        <button
          className="action__button action__button--search"
          data-v-35a3619a
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="action__icon"
            data-v-35a3619a
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
              data-v-35a3619a
            />
          </svg>
        </button>{" "}
        <button
          data-v-35a3619a
          className="action__button action__button--colorModeSwitcher"
        >
          <svg
            data-v-35a3619a
            width={20}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="action__icon"
          >
            <path
              data-v-35a3619a
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>{" "}
          {/**/}
        </button>
      </div>{" "}
      <div data-v-35a3619a>
        <button
          className="hidden items-center space-x-2 rounded-full bg-primary px-4 py-1 lg:flex"
          data-v-35a3619a
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4 text-white"
            data-v-35a3619a
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
              data-v-936cb296
              data-v-35a3619a
            />
          </svg>{" "}
          <span className="text-white" data-v-35a3619a>
            নতুন ডায়েরি
          </span>
        </button>
      </div>{" "}
      <div data-v-35a3619a>
        <div>
          <div className="relative flex items-center">
            <div className="h-8 w-8 cursor-pointer overflow-hidden rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-slate-500 dark:text-slate-400"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>{" "}
          {/**/}
        </div>
      </div>
    </div>
  );
};

export default NavbarAction;
