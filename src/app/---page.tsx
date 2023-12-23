import { type NextPage } from "next";
import Head from "next/head";
import { VisibilityObserver } from "reactjs-visibility";
import { IArticle } from "@/api/models/article.model";
import { IPaginationBase } from "@/api/models/pagination.model";
import { ArticleRepository } from "@/api/repositories/article.repository";
import ArticleCard from "@/components/ArticleCard";
import FakeEditor from "@/components/FakeEditor";
import HomeLeftSidebar from "@/components/asides/HomeLeftSidebar";
import HomeRightSidebar from "@/components/asides/HomeRightSidebar";
import ThreeColumnLayout from "@/components/layout/ThreeColumnLayout";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface Props {
  paginatedArticles: IPaginationBase<IArticle>;
}

const Home: NextPage<Props> = ({ paginatedArticles }) => {
  const articleRepository = new ArticleRepository();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["articles"],
      queryFn: async ({ pageParam = 1 }) => {
        return articleRepository.getArticles({ page: pageParam });
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.meta.current_page !== lastPage.meta.last_page) {
          return lastPage.meta.current_page + 1;
        }
      },
      getPreviousPageParam: (firstPage) => {
        if (firstPage.meta.current_page !== 1) {
          return firstPage.meta.current_page - 1;
        }
      },
      initialData: { pages: [paginatedArticles], pageParams: [1] },
    });
  const articles = data?.pages.reduce(
    (acc: IArticle[], page: IPaginationBase<IArticle>) => {
      return [...acc, ...page.data];
    },
    []
  );

  return (
    <>
      <ThreeColumnLayout
        LeftSidebar={<HomeLeftSidebar />}
        RightSidebar={<HomeRightSidebar />}
      >
        <FakeEditor />
        <div className="flex flex-col gap-10 mt-10">
          {articles?.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div className="my-20">
          <VisibilityObserver
            onChangeVisibility={(isVisible) => {
              if (isVisible) {
                fetchNextPage();
              }
            }}
            options={{ rootMargin: "200px" }}
          >
            <p>Loadmore...</p>
          </VisibilityObserver>
        </div>
      </ThreeColumnLayout>
    </>
  );
};

export default Home;

// export const getServerSideProps = async () => {
//   const articleRepository = new ArticleRepository();
//   return {
//     props: {
//       paginatedArticles: await articleRepository.getArticles({ page: 1 }),
//     },
//   };
// };

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
