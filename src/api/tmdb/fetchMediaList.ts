import { MediaType } from '@app/api/tmdb/types';
import get from '@app/api/setup';

export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  adult: boolean;
  media_type: MediaType;
  backdrop_path: string
  poster_path: string;
  original_language: string;
  genre_ids: Array<number>;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITV {
  id: number;
  name: string;
  first_air_date: string;
  backdrop_path: string;
  poster_path: string;
  genre_ids: Array<number>;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

const fetchMediaList = async (
  mediaType:MediaType,
  type: string,
  params?: Record<string, string>,
) => get(
  `/${mediaType}/${type}`,
  { ...params },
);

export default fetchMediaList;
