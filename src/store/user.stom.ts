import { IUserFullDetails } from "@/api/models/user.model";
import { atom } from "jotai";

export const sesionUserStatusAtom = atom<
  "authenticated" | "loading" | "unauthenticated"
>("loading");

export const sessionUserAtom = atom<IUserFullDetails | null>(null);
