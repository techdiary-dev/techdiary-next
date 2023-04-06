import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../http.client";
import { IPaginationBase } from "../models/pagination.model";
import { IUser } from "../models/user.model";
import { ApiRepository } from "./repository";

export class UserRepository extends ApiRepository {
  //   async getUsers(page = 1) {
  //     const { data } = await this.httpClient.get("/users", {
  //       params: {
  //         page,
  //       },
  //     });
  //     return data;
  //   }
  //   async getUser(id) {
  //     const { data } = await this.httpClient.get(`/users/${id}`);
  //     return data;
  //   }

  users(limit: number, page: number = 1) {
    return useQuery(["users"], async () => {
      const { data } = await httpClient.get<IPaginationBase<IUser>>(
        "/profile/list",
        {
          params: {
            limit,
            page,
          },
        }
      );
      return data;
    });
  }
}
