import { type NextPage } from "next";
import Head from "next/head";

import { IArticle } from "@/api/models/article.model";
import { ArticleRepository } from "@/api/repositories/article.repository";
import FakeEditor from "@/components/FakeEditor";
import HomeLeftSidebar from "@/components/asides/HomeLeftSidebar";
import HomeRightSidebar from "@/components/asides/HomeRightSidebar";
import ThreeColumnLayout from "@/components/layout/ThreeColumnLayout";
import { useQuery } from "@tanstack/react-query";

interface Props {
  articles: IArticle[];
}

const Home: NextPage<Props> = () => {
  const articleRepository = new ArticleRepository();

  const { data, isLoading } = useQuery(["articles"], () =>
    articleRepository.getArticles()
  );

  return (
    <>
      <Head>
        <title>Techdiary</title>
        <meta name="description" content="Techdiary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThreeColumnLayout
        LeftSidebar={<HomeLeftSidebar />}
        RightSidebar={<HomeRightSidebar />}
      >
        <FakeEditor />

        {isLoading && <div>Loading...</div>}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </ThreeColumnLayout>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const articleRepository = new ArticleRepository();
  return {
    props: {
      articles: await articleRepository.getArticles(),
    },
  };
};

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-2xl text-center text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="px-10 py-3 font-semibold text-white no-underline transition rounded-full bg-white/10 hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
