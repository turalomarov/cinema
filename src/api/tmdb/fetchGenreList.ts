import type { MediaType, Genre } from '@app/api/tmdb/types';
import get from '@app/api/setup';

export interface GenreList {
  genres: Array<Genre>
}

const fetchGenreList = async (mediaType: MediaType) => get(
  `/genre/${mediaType}/list`,
);

export default fetchGenreList;
