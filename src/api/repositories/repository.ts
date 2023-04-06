import { httpClient } from "../http.client";

export class ApiRepository {
  protected httpClient;
  constructor() {
    this.httpClient = httpClient;
  }
}
