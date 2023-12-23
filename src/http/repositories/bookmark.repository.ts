import { ApiRepository } from "./repository";

class BookmarkRepository extends ApiRepository {
  public createBook(payload: ICreateBookmarkPayload) {
    return this.httpClient.post("bookmarks", payload);
  }
}
export const bookmarkRepository = new BookmarkRepository();

export interface ICreateBookmarkPayload {
  model_name: "ARTICLE" | "COMMENT";
  model_id: string;
}
