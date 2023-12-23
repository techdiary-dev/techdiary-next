import { httpClient } from "../http.client";
import { IPaginationBase } from "../models/pagination.model";
import { IUser, IUserFullDetails } from "../models/user.model";
import { BasePaginationPayload } from "../payloads/base-pagination.payload";
import { ApiRepository } from "./repository";

export class UserRepository extends ApiRepository {
  /**
   * Get a list of users
   * @param limit - number of users to return
   * @param page - page number
   * @returns
   */
  users(payload: BasePaginationPayload) {
    return httpClient.get<IPaginationBase<IUser>>("/profile/list", {
      params: {
        limit: payload.limit,
        page: payload.page,
      },
    });
  }

  /**
   * Get a user by username
   * @param userName - username of the user to get
   * @returns
   */
  userProfileByUserName(userName: string) {
    return httpClient.get<{ data: IUserFullDetails }>(
      "/profile/username/" + userName,
    );
  }
}
