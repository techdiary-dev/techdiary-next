export interface IUser {
  id: string;
  name: string;
  username: string;
  profilePhoto: string;
  social_links: {
    twitter: string;
    github: string;
  };
}
