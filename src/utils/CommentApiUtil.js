const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_AUTHORIZATION_TOKEN;

const headers = {
  'Accept': 'application/json',
  'Authorization': API_TOKEN
}

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
