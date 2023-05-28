import type { Cast, MediaType } from '@app/api/tmdb/types';
import get from '@app/api/setup';

export interface IMediaCredits {
  id: number;
  cast: Array<Cast>
}

const fetchCredits = async (mediaType:MediaType, id: string) => get(
  `/${mediaType}/${id}/credits`,
);

export default fetchCredits;
