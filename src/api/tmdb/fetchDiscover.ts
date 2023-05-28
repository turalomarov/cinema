import type { MediaType } from '@app/api/tmdb/types';
import get from '@app/api/setup';

const fetchDiscover = async (
  mediaType:MediaType,
  { genreIds, page }:Record<string, string>,
  signal?:AbortSignal,
) => get(
  `/discover/${mediaType}`,
  {
    api_key: 'dea6a5b4ce5ff3121ea28493c7376d31',
    with_genres: genreIds,
    sort_by: 'popularity.desc',
    page,
  },
  { signal },
);

export default fetchDiscover;
