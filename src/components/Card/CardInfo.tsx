import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { CategoryMovie, CategoryTv } from '@app/components/icons';
import type { MediaType } from '@app/api/tmdb/types';
import { getYear } from '@app/utils';

interface CardInfoProps extends PropsWithChildren {
  mediaType: MediaType;
  trending?: boolean;
  year: string
}

const renderCategoryIcon = (category:string) => {
  if (category === 'movie') {
    return <CategoryMovie className="pl-1 text-base" />;
  }
  return <CategoryTv className="pl-1 text-base" />;
};

const renderCategoryText = (mediaType: MediaType) => {
  if (mediaType === 'movie') {
    return 'Movie';
  }
  return 'TV Series';
};

const CardInfo:FC<CardInfoProps> = ({
  mediaType,
  trending = false,
  year,
  children,
}) => (
  <div
    className={classNames('absolute left-4 bottom-4 h-fit truncate text-ellipsis text-app-white', {
      'w-fit': trending,
      'w-[90%]': !trending,
    })}
  >
    <div
      className={
        trending
          ? 'mt-2 mb-1 flex text-[11px] font-light md:text-[15px]'
          : 'mt-2 mb-1 flex text-[11px] font-light md:text-[13px]'
      }
    >
      <p>{getYear(year)}</p>
      <div
        className={
          trending
            ? 'flex items-center px-[8px] before:content-["•"]'
            : 'flex items-center px-[6px] before:content-["•"]'
        }
      >
        {renderCategoryIcon(mediaType)}
        <p className={trending ? 'pl-[6px] pr-[6px]' : 'pl-1 pr-1'}>
          {renderCategoryText(mediaType)}
        </p>
      </div>
    </div>
    <h2
      className={
        trending
          ? 'md:heading-sm w-[200px] truncate text-sm font-bold capitalize sm:w-[420px] md:h-6'
          : 'md:heading-xs truncate text-sm font-bold capitalize'
      }
    >
      {children}
    </h2>
  </div>
);

export default CardInfo;
