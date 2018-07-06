import uuid from 'uuid';
import { API_URL, headers } from './Api';

export const getAll = () =>
  fetch(`${API_URL}/posts`, { headers })
      .then(res => res.json());

export const getByCategory = category =>
  fetch(`${API_URL}/${category}/posts`, { headers })
    .then(res => res.json());

export const votePost = (id, option) =>
  fetch(`${API_URL}/posts/${id}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option })
    }).then(res => res.json());

export const removePost = id =>
  fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());

export const createPost = data =>
  fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...data,
      id: uuid(),
      timestamp: Date.now()
    })
  }).then(res => res.json());

export const editPost = ({ id, title, body }) =>
  fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json());

export const getPost = id =>
  fetch(`${API_URL}/posts/${id}`, { headers })
    .then(res => res.json());

export const getPostComments = id =>
  fetch(`${API_URL}/posts/${id}/comments`, { headers })
    .then(res => res.json());
