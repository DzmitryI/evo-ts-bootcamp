import axios from 'axios';

const accessKey: string = 'E7tq7YBd48hjnVYha712ei3JvIJRfOOuo3ZJC8TL';
const URL: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos';
export default axios.create({
  responseType: 'json',
});

export function fetchSols(sol: number) {
  const params = { api_key: accessKey, sol };
  return axios.get(URL, { params });
}
