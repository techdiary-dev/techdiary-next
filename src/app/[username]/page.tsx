import { UserRepository } from "@/api/repositories/user.repository";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React from "react";

interface Props {
  params: { username: string };
}

const ProfilePage: React.FC<Props> = async ({ params }) => {
  // get user username from url @username
  const username = (userName: string) => {
    if (userName.startsWith("@")) {
      return userName.split("@")[1];
    }
    if (userName.startsWith("%40")) {
      return userName.split("%40")[1];
    }

    return userName;
  };

  const userRepository = new UserRepository();
  const {
    data: { data: profile },
  } = await userRepository.userProfileByUserName(username(params.username)!);

  return (
    <main className="wrapper">
      <div className="my-2 grid grid-cols-1 gap-6 md:grid-cols-12 lg:my-6 lg:gap-10">
        <aside className="col-span-full md:col-span-3">
          <div>
            <img
              src={profile?.profilePhoto}
              alt={profile?.name}
              className="w-full rounded"
            />{" "}
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{profile?.name}</h2>
              <p className="lowercase">@{profile?.username}</p>
            </div>{" "}
            {/**/} {/**/}{" "}
            <div className="mt-2 flex flex-col space-y-2">
              {/**/} {/**/}{" "}
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span className="text-sm">{profile?.email}</span>
              </div>{" "}
              {/**/}
            </div>
          </div>
        </aside>{" "}
        <main className="app-border-color col-span-full rounded border md:col-span-9">
          <div>
            <nav className="profile-navigation">
              <a
                href="#"
                className="profile-navigation__item profile-navigation__item--active"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span className="profile-navigation__label">প্রোফাইল</span>
              </a>{" "}
              <a
                href="/entrptaher/articles"
                className="profile-navigation__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>{" "}
                <span className="navigation__label">সকল আর্টিক্যাল</span>
              </a>{" "}
              {/**/}
            </nav>{" "}
            <div className="content-typography p-4">
              {profile?.profile_readme}
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default ProfilePage;
