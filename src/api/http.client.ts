import { env } from "@/env.mjs";
import axios from "axios";

export const httpClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
