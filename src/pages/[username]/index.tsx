import BaseLayout from "@/components/layout/BaseLayout";
import useUser from "@/hooks/useUser";
import { sesionUserStatusAtom, sessionUserAtom } from "@/store/user.stom";
import { useAtom } from "jotai";
import { GetServerSideProps, NextPage } from "next";

const UserProfilePage: NextPage = (props) => {
  const { user, status } = useUser();
  return (
    <BaseLayout>
      <pre>{JSON.stringify({ status, user }, null, 2)}</pre>
    </BaseLayout>
  );
};

export default UserProfilePage;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let username = ctx.params?.username as string;
  if (username?.startsWith("@")) {
    username = username.slice(1);
  }
  return {
    props: { username },
  };
};
