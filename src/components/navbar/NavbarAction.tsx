import useUser from "@/hooks/useUser";
import { sessionUserAtom } from "@/store/user.stom";
import { Avatar, Button, Loader, Menu, UnstyledButton } from "@mantine/core";
import { useAtom } from "jotai";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { AiFillGithub, AiOutlinePlus } from "react-icons/ai";
import {
  HiLogout,
  HiOutlineBookmark,
  HiOutlineCog,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";

const NavbarAction = () => {
  const { status } = useUser();
  return (
    <div className="flex items-center gap-2 md:gap-6">
      {/* <div className="flex items-center gap-1">
        <button>
          <IconHome />
        </button>
        <button>
          <IconMoon />
        </button>
      </div> */}
      {status === "loading" && <Loader />}
      {status === "authenticated" && (
        <>
          <Button leftIcon={<AiOutlinePlus />}>নতুন ডায়েরি</Button>
          <AuthenticatedMenu />
        </>
      )}
      {status === "unauthenticated" && <UnAuthenticatedMenu />}
    </div>
  );
};

export default NavbarAction;

const AuthenticatedMenu = () => {
  const [sessionUser] = useAtom(sessionUserAtom);

  const handleLogout = () => {
    signOut();
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Avatar
            src={sessionUser?.profilePhoto || ""}
            alt={sessionUser?.name || ""}
          />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          component={Link}
          href={`@${sessionUser?.username}`}
          icon={<HiOutlineUserCircle size={18} />}
        >
          আমার প্রোফাইল
        </Menu.Item>
        <Menu.Item icon={<MdOutlineDashboard size={18} />}>
          ড্যাসবোর্ড
        </Menu.Item>
        <Menu.Item icon={<HiOutlineBookmark size={18} />}>
          বুকমার্ক সমূহ
        </Menu.Item>
        <Menu.Item icon={<HiOutlineCog size={18} />}>সেটিং</Menu.Item>
        <Menu.Item
          icon={<HiLogout size={18} />}
          component="button"
          onClick={handleLogout}
        >
          লগ আউট
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

const UnAuthenticatedMenu = () => {
  const handleLogin = (provider: string) => {
    signIn(provider);
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Avatar />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          component="button"
          onClick={() => handleLogin("github")}
          icon={<AiFillGithub size={18} />}
        >
          গিটহাব দিয়ে লগইন
        </Menu.Item>
        {/* <Menu.Item
          component="button"
          onClick={() => handleLogin("google")}
          icon={<AiOutlineGoogle size={18} />}
        >
          গুগল দিয়ে লগইন
        </Menu.Item> */}
      </Menu.Dropdown>
    </Menu>
  );
};

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
