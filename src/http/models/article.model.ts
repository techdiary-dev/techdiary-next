import { ITag } from "./tag.model";
import { IUser } from "./user.model";

export interface IArticle {
  id: string;
  title: string;
  slug: string;
  url: string;
  votes: IVote;
  bookmarked_users: string[];
  comments_count: number;
  thumbnail: string;
  tags: ITag[];
  excerpt: null;
  isPublished: boolean;
  user: IUser;
  created_at: Date;
}

export interface IVote {
  up_voters: string[];
  down_voters: string[];
  score: number;
}
