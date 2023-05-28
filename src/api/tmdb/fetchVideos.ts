import type { MediaType } from '@app/api/tmdb/types';
import get from '@app/api/setup';

export interface IVideo {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: 'Teaser' | 'Clip' | 'Featurette' | 'Trailer',
  official: boolean,
  published_at: string,
  id: string
}

const fetchVideos = async (mediaType: MediaType, id: number) => get(
  `/${mediaType}/${id}/videos`,
);

export default fetchVideos;
