import { IUser } from "@/api/models/user.model";
import { Image, Paper, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

interface Props {
  user: IUser;
}

const UserHoverCard: React.FC<Props> = ({ user }) => {
  return (
    <Paper>
      <div className="flex items-center gap-2">
        <Image
          height={80}
          width={80}
          radius={"md"}
          src={user.profilePhoto}
          alt={user.username}
          className="flex-none"
        />

        <div className="flex flex-col">
          <Link
            href={`@${user?.username}`}
            className="text-base text-gray-800 uppercase dark:text-gray-100"
          >
            {user.name}
          </Link>
          <Link
            href={`@${user?.username}`}
            className="text-sm text-gray-600 dark:text-gray-300"
          >
            @{user.username}
          </Link>
          <div className="flex gap-1 mt-2">
            {user?.social_links?.github && (
              <a href={user?.social_links?.github} target="_blank">
                <AiFillGithub />
              </a>
            )}

            {user.social_links.twitter && (
              <a href={user?.social_links?.twitter} target="_blank">
                <AiFillTwitterCircle />
              </a>
            )}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default UserHoverCard;
