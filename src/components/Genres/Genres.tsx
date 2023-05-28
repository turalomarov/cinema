import { FC } from 'react';
import type { Genre } from '@app/api/tmdb/types';
import CardGenre from '../CardGenre';

interface GenreProps {
  genres: Array<Genre>;
  category: 'movie' | 'tv';
}
// Todo maybe remove component
const Genres:FC<GenreProps> = ({ genres, category }) => (
  <section className="mb-10 flex flex-wrap justify-between text-app-white">
    {genres.map((genre) => (
      <a
        key={genre.id}
        href={`/${category}/genre/${genre.id}?name=${genre.name}&page=1`}
      >
        <CardGenre>
          {genre.name}
        </CardGenre>
      </a>
    ))}
  </section>
);

export default Genres;
