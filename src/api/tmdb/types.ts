import type { IMovie, ITV } from '@app/api/tmdb/fetchMediaList';
import type { IMediaCredits } from '@app/api/tmdb/fetchCredits';
import type { IMediaMulti } from '@app/api/tmdb/fetchMulti';
import type { GenreList } from '@app/api/tmdb/fetchGenreList';
import type { IVideo } from '@app/api/tmdb/fetchVideos';
import type { ITVDetails, IMovieDetails } from '@app/api/tmdb/fetchDetails';

type MediaType = 'movie' | 'tv';

type Status = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';

type Genre = {
  name: string;
  id: number;
};

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

interface Cast {
  adult: boolean,
  gender: number | null,
  id: 73457,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string | null,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number
}

interface ListResponse<T> {
  results: Array<T>;
  page: number;
  total_pages:number;
  total_results: number;
}

export type {
  ListResponse,
  SpokenLanguages,
  Status,
  Genre,
  MediaType,
  Cast,
  ITV,
  IMediaMulti,
  IMovie,
  IMediaCredits,
  IVideo,
  GenreList,
  ITVDetails,
  IMovieDetails,
};
