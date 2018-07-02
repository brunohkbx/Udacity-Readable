const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_AUTHORIZATION_TOKEN;

const headers = {
  'Accept': 'application/json',
  'Authorization': API_TOKEN
}

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
