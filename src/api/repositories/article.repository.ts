import { useQuery } from "@tanstack/react-query";
import { ApiRepository } from "./repository";
import { IPaginationBase } from "../models/pagination.model";
import { IArticle } from "../models/article.model";
import { BasePaginationPayload } from "../payloads/base-pagination.payload";

export class ArticleRepository extends ApiRepository {
  public async getArticles(payload: BasePaginationPayload) {
    const { data } = await this.httpClient.get<IPaginationBase<IArticle>>(
      "/articles",
      {
        params: { page: payload?.page, limit: payload?.limit },
      },
    );
    return data;
  }
}
