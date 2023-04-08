import { IArticle } from "@/api/models/article.model";
import Image from "next/image";
import { format } from "date-fns";
import { bn } from "date-fns/locale";

import Link from "next/link";
import React from "react";

interface Props {
  article: IArticle;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <article>
      <div className="mb-[10px] flex h-12 items-center justify-between">
        {/*  */}
        <Link href={article?.user?.username}>
          <div className="flex items-center space-x-2">
            <div className="inline-block w-10 h-10 overflow-hidden rounded-full">
              <img
                height={40}
                width={40}
                src={article?.user?.profilePhoto}
                alt={article?.user?.username}
                className="w-full"
              />
            </div>
            <div>
              <p className="font-mono text-dark-secondary">
                {article?.user?.username}
              </p>
              <p className="text-sm text-dark-secondary">
                {format(new Date(article?.created_at), "dd MMMM yyyy", {
                  locale: bn,
                })}
              </p>
            </div>
          </div>
        </Link>
        {/*  */}

        <div className="space-x-3">
          <button>
            <svg
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 text-dark-secondary"
            >
              <path
                d="M1.83354 1.28697C1.52462 1.63079 1.35107 2.0971 1.35107 2.58333V17.25L7.11647 14.0417L12.8819 17.25V2.58333C12.8819 2.0971 12.7083 1.63079 12.3994 1.28697C12.0905 0.943154 11.6715 0.75 11.2346 0.75H2.99833C2.56145 0.75 2.14246 0.943154 1.83354 1.28697Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current"
              ></path>
            </svg>
          </button>
          <button className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Link
        href={`${article?.user?.username}/${article?.slug}`}
        className="article-card__title"
      >
        {article?.title}
      </Link>
      <div className="article-card__thumbnail">
        <Link href={`${article?.user?.username}/${article?.slug}`}>
          <div className="inline-block w-full overflow-hidden rounded-md">
            <img
              width={1200}
              height={630}
              src={article.thumbnail}
              alt={article.title}
              className="w-full"
            />
          </div>
        </Link>
      </div>
      <div className="article-card__content">
        <a
          href="/guestac2004iebp/5cf5eaf5-d339-4401-bfb9-716c26fae99f-OSoccW"
          className="article-card__excerpt"
        ></a>
        <div className="article-card__tags"></div>
        <div className="flex items-center mt-2 space-x-4">
          <div className="vote">
            <button className="vote__button vote__button--upvote">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
              <span>4</span>
            </button>
            <button className="vote__button vote__button--downvote">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
          <p className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              ></path>
            </svg>
            <span>0</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
