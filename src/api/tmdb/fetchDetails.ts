import type {
  Genre, MediaType, SpokenLanguages, Status,
} from '@app/api/tmdb/types';
import get from '@app/api/setup';
import type { IMovie, ITV } from '@app/api/tmdb/fetchMediaList';

export interface IMovieDetails extends Omit<IMovie, 'genre_ids' | 'media_type'> {
  tagline: string;
  runtime: number;
  spoken_languages: Array<SpokenLanguages>;
  status: Status | string;
  imdb_id: string;
  genres: Array<Genre>;
  homepage: string;
}

export interface ITVDetails extends Omit<ITV, 'genre_ids'> {
  origin_country: Array<string>;
  popularity: number;
  vote_average: number;
  vote_count: number;
  genres: Array<Genre>;
  homepage: string;
  in_production: boolean;
  languages: Array<string>;
  last_air_date: string;
  spoken_languages: Array<SpokenLanguages>;
  status: string;
  tagline: string;
}

const fetchDetails = async (mediaType:MediaType, id: string) => get(
  `/${mediaType}/${id}`,
);

export default fetchDetails;
