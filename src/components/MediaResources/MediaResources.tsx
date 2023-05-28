import { FC } from 'react';
import classNames from 'classnames';
import { FaImdb, FaLink } from 'react-icons/fa';

interface MediaResourcesProps {
  website: string;
  imdb: string;
}

const MediaResources:FC<MediaResourcesProps> = ({ website, imdb }) => (
  <div className="mb-10 flex flex-wrap">
    {website && (
    <a
      href={website}
      className={classNames(
        'mb-4 mr-4 flex w-40 cursor-pointer items-center justify-between rounded-md border-none bg-app-grey-blue',
        'py-3 px-8 text-sm font-medium text-app-white hover:bg-app-white hover:text-app-dark-blue',
      )}
      target="_blank"
      rel="noreferrer"
    >
      <p>Website</p>
      <FaLink className="text-base" />
    </a>
    )}
    {imdb && (
      <a
        href={`https://www.imdb.com/title/${imdb}`}
        className={classNames(
          'mb-4 flex w-40 cursor-pointer items-center justify-between rounded-md border-none bg-app-grey-blue',
          'py-3 px-8 text-sm font-medium text-app-white hover:bg-app-white hover:text-app-dark-blue',
        )}
        target="_blank"
        rel="noreferrer"
      >
        <p>IMDB</p>
        <FaImdb className="text-base" />
      </a>
    )}
  </div>
);

export default MediaResources;
