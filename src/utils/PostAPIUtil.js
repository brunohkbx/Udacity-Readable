const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_AUTHORIZATION_TOKEN;

const headers = {
  'Accept': 'application/json',
  'Authorization': API_TOKEN
}

export const getAll = () =>
  fetch(`${API_URL}/posts`, { headers })
    .then(res => res.json())