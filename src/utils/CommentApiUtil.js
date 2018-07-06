import uuid from 'uuid';
import { API_URL, headers } from './Api';

export const deleteComment = id =>
  fetch(`${API_URL}/comments/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json());

export const voteComment = (id, option) =>
  fetch(`${API_URL}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json());

export const createComment = (parentId, data) =>
  fetch(`${API_URL}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...data,
      id: uuid(),
      parentId,
      timestamp: Date.now()
    })
  }).then(res => res.json());

export const editComment = ({ id, body }) =>
  fetch(`${API_URL}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      body,
      timestamp: Date.now()
    })
  }).then(res => res.json());
