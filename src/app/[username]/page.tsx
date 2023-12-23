import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    username: string;
  };
}

const ProfilePage: React.FC<Props> = ({ params }) => {
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

  return <div>username: {username(params.username)}</div>;
};

export default ProfilePage;
