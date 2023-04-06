import { useQuery } from "@tanstack/react-query";
import { ApiRepository } from "./repository";
import { IPaginationBase } from "../models/pagination.model";
import { IArticle } from "../models/article.model";

export class ArticleRepository extends ApiRepository {
  public async getArticles(limit: number = 10, page: number = 1) {
    const { data } = await this.httpClient.get<IPaginationBase<IArticle>>(
      "/articles",
      {
        params: { page, limit },
      }
    );
    return data;
  }
}
