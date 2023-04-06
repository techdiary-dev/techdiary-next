export interface PaginationLinks {
  first: string;
  last: string;
  prev: null;
  next: string;
}
export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLinks[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface IPaginationBase<T> {
  data: T[];
  links: PaginationLinks;
  meta: Meta;
}
