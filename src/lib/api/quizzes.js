import qs from 'qs';
import client from './client';

export const writePost =({title, body, tags}) =>
  client.post('/api/posts', { title, body, tags });


export const readPost = id => client.get(`/api/quizzes/${id}`);

export const listQuizzes = ({ page, username, tag}) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/quiz/randoms/1/6`);
  // return client.get(`/api/quizzes?${queryString}`);
}

export const updatePost = ({id, title, body, tags}) => 
 client.patch(`/api/quizzes/${id}`, {
   title,
   body,
   tags,
});

export const removePost = id => client.delete(`/api/quizzes/${id}`);