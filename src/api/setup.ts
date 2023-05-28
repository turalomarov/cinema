import { TMDB_API_KEY, TMDB_API_URL } from '@app/config';

const get = async (url:string, params:Record<string, string> = {}, init?:RequestInit) => {
  const response = await fetch(
    `${TMDB_API_URL}${url}?${new URLSearchParams({ api_key: TMDB_API_KEY, ...params })}`,
    init,
  );
  return response.json();
};

export default get;
