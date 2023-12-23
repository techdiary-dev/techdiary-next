export interface IUser {
  id: string;
  name: string;
  username: string;
  profilePhoto: string;
  social_links: {
    twitter: string;
    github: string;
  };
  joined?: Date;
}

export interface IUserFullDetails {
  id: string;
  name: string;
  username: string;
  email: string;
  profilePhoto: string;
  education: string;
  designation: string;
  bio: string;
  website_url: string;
  location: string;
  social_links: ISocialLinks;
  profile_readme: string;
  skills: null;
  created_at: Date;
  updated_at: Date;
  two_factor_secret: null;
  two_factor_recovery_codes: null;
}

export interface ISocialLinks {
  github: string;
  facebook: string;
  stackOverflow: string;
  medium: string;
  linkedin: string;
  twitter: null;
  instagram: string;
  behance: string;
  dribbble: string;
  twitch: null;
  youtube: string;
}
