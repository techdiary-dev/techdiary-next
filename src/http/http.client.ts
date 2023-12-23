import { env } from "@/env.mjs";
import axios from "axios";
import { getSession } from "next-auth/react";

export const httpClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session?.user?.accessToken) {
    config.headers.Authorization = `Bearer ${session.user.accessToken}`;
  }
  return config;
});
