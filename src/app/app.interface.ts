export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
export type Users = User[];

export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}
export type Posts = Post[];

export interface Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}
export type Comments = Comment[];

export type RegisteringStatus = 'NOT_TRIED' | 'FAILED' | 'SUCCEEDED';
