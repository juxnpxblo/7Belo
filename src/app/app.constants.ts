import { Comment } from './app.interface';

export const ourEmail = '7belo@7belo.com';
export const testemunhosPostTitle = 'Testemunhos';

export const BASE_URL = 'https://gorest.co.in/public/v2';
export const HEADERS = {
  Accept: 'application/json',
  Authorization:
    'Bearer d01b6b8dcc752edc6fc970a5a009703a3b4f485db624333559cb1da59eeb0ee4',
  'Content-Type': 'application/json',
};

export const defaultComment: Comment = {
  id: 0,
  post_id: 0,
  name: 'Cliente Cliente',
  email: 'cliente@email.com',
  body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
};
