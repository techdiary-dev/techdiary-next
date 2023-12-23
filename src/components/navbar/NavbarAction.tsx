"use client";
import { sessionUserAtom } from "@/store/user.stom";
import {
  Avatar,
  Menu,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useAtom } from "jotai";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import {
  HiLogout,
  HiOutlineBookmark,
  HiOutlineCog,
  HiOutlineUserCircle,
} from "react-icons/hi";
import {
  MdDarkMode,
  MdOutlineDashboard,
  MdOutlineWbSunny,
} from "react-icons/md";

const NavbarAction = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  // const { status } = useUser();
  return (
    <div className="flex items-center gap-2 md:gap-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
        >
          {computedColorScheme === "light" ? (
            <MdDarkMode size={22} />
          ) : (
            <MdOutlineWbSunny size={22} />
          )}
        </button>
      </div>
      {/* {status === "loading" && <Loader />} */}
      {/* {status === "authenticated" && (
        <>
          <Button leftIcon={<AiOutlinePlus />}>নতুন ডায়েরি</Button>
          <AuthenticatedMenu />
        </>
      )} */}
      {/* {status === "unauthenticated" && <UnAuthenticatedMenu />} */}
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
          href={`/@${sessionUser?.username}`}
          leftSection={<HiOutlineUserCircle size={18} />}
        >
          আমার প্রোফাইল
        </Menu.Item>
        <Menu.Item leftSection={<MdOutlineDashboard size={18} />}>
          ড্যাসবোর্ড
        </Menu.Item>
        <Menu.Item leftSection={<HiOutlineBookmark size={18} />}>
          বুকমার্ক সমূহ
        </Menu.Item>
        <Menu.Item leftSection={<HiOutlineCog size={18} />}>সেটিং</Menu.Item>
        <Menu.Item
          leftSection={<HiLogout size={18} />}
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
          leftSection={<AiFillGithub size={18} />}
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
