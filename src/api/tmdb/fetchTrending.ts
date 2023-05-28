import type { MediaType } from '@app/api/tmdb/types';
import get from '@app/api/setup';

const fetchTrending = async (mediaType:MediaType, params?: Record<string, string>) => get(
  `/trending/${mediaType}/week`,
  { ...params },
);

export default fetchTrending;
