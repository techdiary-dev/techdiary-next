"use client";

import { useVisibility } from "reactjs-visibility";
import { IArticle } from "@/http/models/article.model";
import { IPaginationBase } from "@/http/models/pagination.model";
import { ArticleRepository } from "@/http/repositories/article.repository";
import ArticleCard from "@/components/ArticleCard";
import { Loader } from "@mantine/core";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
interface Props {
  initPaginatedArticles?: IPaginationBase<IArticle>;
}

const ArticleFeed: React.FC<Props> = ({ initPaginatedArticles }) => {
  const articleRepository = new ArticleRepository();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["article-feed"],
      queryFn: ({ pageParam }) => {
        return articleRepository.getArticles({
          limit: 10,
          page: pageParam as number,
        });
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage?.meta.current_page !== lastPage?.meta.last_page) {
          return lastPage!.meta.current_page + 1;
        }
      },
      getPreviousPageParam: (firstPage) => {
        if (firstPage?.meta?.current_page !== 1) {
          return firstPage!.meta.current_page - 1;
        }
      },
      initialData: { pages: [initPaginatedArticles], pageParams: [1] },
    });

  const { ref } = useVisibility({
    onChangeVisibility: (visible) => {
      if (visible && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <div className="flex flex-col gap-6">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page?.data?.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </React.Fragment>
      ))}

      <Loader ref={ref} className="mx-auto my-10" />
    </div>
  );
};

export default ArticleFeed;
