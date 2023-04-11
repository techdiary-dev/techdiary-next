import { IUser } from "@/api/models/user.model";
import { UserRepository } from "@/api/repositories/user.repository";
import { relativeTime } from "@/utils/relativeTime";
import { Skeleton } from "@mantine/core";
import { format, formatRelative } from "date-fns";
import { bn } from "date-fns/locale";
import Link from "next/link";

const LatestUsers = () => {
  const userRepository = new UserRepository();
  const { isLoading, data } = userRepository.users(10);

  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-gray-600 dark:text-slate-300">
        সর্বশেষ নিবন্ধিত ব্যবহারকারী
      </h3>
      <div className="flex flex-col gap-5">
        {isLoading &&
          Array.from({ length: 10 }).map((_, i) => <UserSkeleton key={i} />)}

        {data?.data.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestUsers;

const User = ({ user }: { user: IUser }) => {
  return (
    <div className="flex items-center" v-for="user in users">
      <Link href={`/@${user.username}`}>
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img
            src={user?.profilePhoto!}
            alt={user?.name!}
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
      </Link>

      <div className="ml-2">
        <h3 className="text-dark text-base">
          <Link
            href={`/@${user?.username}`}
            className="text-gray-800 dark:text-gray-300"
          >
            {user.name}
          </Link>
        </h3>
        <p className="text-dark-secondary text-xs">
          {relativeTime(new Date(user.joined!))}
        </p>
      </div>
    </div>
  );
};

const UserSkeleton = () => {
  return (
    <div className="flex items-center gap-2">
      <Skeleton height={40} width={40} circle className="flex-none " />
      <div className="flex w-full flex-col gap-2">
        <Skeleton height={10} radius="xl" width={"70%"} />
        <Skeleton height={6} radius="xl" width={"70%"} />
      </div>
    </div>
  );
};
