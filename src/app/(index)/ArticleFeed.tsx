import { IArticle } from "@/api/models/article.model";
import ArticleCard from "@/components/ArticleCard";
import React from "react";
interface Props {
  initArticles?: IArticle[];
}

const ArticleFeed: React.FC<Props> = ({ initArticles }) => {
  return (
    <div>
      {initArticles?.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleFeed;
