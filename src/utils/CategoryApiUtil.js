import { API_URL, headers } from './Api';

export const getAll = () =>
  fetch(`${API_URL}/categories`, { headers })
    .then(res => res.json());
