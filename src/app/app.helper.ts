import {
  ourEmail,
  testemunhosPostTitle,
  BASE_URL,
  HEADERS,
} from './app.constants';
import { Users, Posts, Comments } from './app.interface';

export const apiGet = async <T>(endpoint: string) =>
  fetch(BASE_URL + endpoint, {
    headers: HEADERS,
  }).then((res) => res.json() as Promise<T>);

export const getOurId = async () =>
  (await apiGet<Users>(`/users?email=${ourEmail}`))[0].id;

export const getOurPosts = async () =>
  await apiGet<Posts>(`/posts?user_id=${await getOurId()}`);

export const getTestemunhos = async () => {
  for (let post of await getOurPosts())
    if (post.title === testemunhosPostTitle)
      return await apiGet<Comments>(`/comments?post_id=${post.id}`);

  return [];
};

export const register = async (name: string, email: string) =>
  fetch(BASE_URL + '/users', {
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify({
      name,
      gender: 'male',
      email,
      status: 'active',
    }),
  }).then((res) => res.status);
