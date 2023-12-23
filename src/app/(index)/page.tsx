import FakeEditor from "@/components/FakeEditor";
import HomeLeftSidebar from "@/components/asides/HomeLeftSidebar";
import HomeRightSidebar from "@/components/asides/HomeRightSidebar";
import ThreeColumnLayout from "@/components/layout/ThreeColumnLayout";
import { NextPage } from "next";
import ArticleFeed from "./ArticleFeed";
import { ArticleRepository } from "@/http/repositories/article.repository";

const HomePage: NextPage = async () => {
  const articleRepository = new ArticleRepository();
  const paginatedArticles = await articleRepository.getArticles({
    limit: 10,
    page: 1,
  });

  return (
    <>
      <ThreeColumnLayout
        LeftSidebar={<HomeLeftSidebar />}
        RightSidebar={<HomeRightSidebar />}
      >
        <FakeEditor />
        <div className="mt-10 flex flex-col gap-10">
          <ArticleFeed initPaginatedArticles={paginatedArticles} />
        </div>
      </ThreeColumnLayout>
    </>
  );
};

export default HomePage;
