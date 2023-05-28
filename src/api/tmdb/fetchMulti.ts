import type { MediaType } from '@app/api/tmdb/types';
import type { IMovie, ITV } from '@app/api/tmdb/fetchMediaList';
import get from '@app/api/setup';

export interface IMediaMulti extends ITV, IMovie {
  media_type: MediaType & 'person';
  adult: boolean;
}

const fetchMulti = async ({ query, page }: Record<string, string>, signal?: AbortSignal) => get(
  '/search/multi',
  {
    query, page,
  },
  { signal },
);

export default fetchMulti;
