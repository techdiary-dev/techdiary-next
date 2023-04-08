import { Avatar, Button, Loader, Menu, UnstyledButton } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";

const NavbarAction = () => {
  const { status } = useSession();
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
      {/* <Button leftIcon={<AiOutlinePlus />}>নতুন ডায়েরি</Button> */}
      {status === "loading" && <Loader />}
      {status === "authenticated" && <AuthenticatedMenu />}
      {status === "unauthenticated" && <UnAuthenticatedMenu />}
    </div>
  );
};

export default NavbarAction;

const AuthenticatedMenu = () => {
  const { data } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Avatar src={data?.user.image} alt={data?.user?.name || ""} />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>আমার প্রোফাইল</Menu.Item>
        <Menu.Item>ড্যাসবোর্ড</Menu.Item>
        <Menu.Item>বুকমার্ক সমূহ</Menu.Item>
        <Menu.Item>সেটিং</Menu.Item>
        <Menu.Item component="button" onClick={handleLogout}>
          লগ আউট
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

const UnAuthenticatedMenu = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Avatar />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<AiFillGithub size={18} />}>
          গিটহাব দিয়ে লগইন
        </Menu.Item>
        <Menu.Item icon={<AiOutlineGoogle size={18} />}>
          গুগল দিয়ে লগইন
        </Menu.Item>
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
