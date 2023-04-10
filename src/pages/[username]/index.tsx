import BaseLayout from "@/components/layout/BaseLayout";
import { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import React from "react";

const UserProfilePage: NextPage = (props) => {
  const session = useSession();
  return (
    <BaseLayout>
      <pre>{JSON.stringify(session, null, 2)}</pre>
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
