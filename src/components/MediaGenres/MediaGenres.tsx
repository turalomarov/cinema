import { FC } from 'react';
import classNames from 'classnames';
import { Genre } from '@app/api/tmdb/types';

interface MediaGenresProps {
  genres: Array<Genre>;
}

const MediaGenres:FC<MediaGenresProps> = ({ genres }) => (
  <div className="mb-6">
    <h3 className="mb-2 md:text-lg text-app-white">Genres</h3>
    <ul className="flex flex-wrap text-xs font-light md:text-sm">
      {genres.map((genre) => (
        <li
          key={genre.id}
          className={
          classNames(
            'mr-2 mb-2 flex items-center justify-center rounded-md border-none',
            'bg-app-white py-px px-2 text-center font-medium text-app-dark-blue',
          )
          }
        >
          {genre.name}
        </li>
      ))}
    </ul>
  </div>
);

export default MediaGenres;
