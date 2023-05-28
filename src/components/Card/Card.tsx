import { FC, PropsWithChildren } from 'react';
import type { MediaType } from '@app/api/tmdb/types';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

interface CardProps extends PropsWithChildren {
  id: number;
  mediaType: MediaType;
  year: string;
  path: string | null;
  trending?: boolean;
}

const Card:FC<CardProps> = ({
  id,
  mediaType,
  path,
  year,
  trending = false,
  children,
}) => (
  <div className="relative">
    <CardImage
      trending={trending}
      path={path}
      alt={`poster for movie ${id}`}
    />
    <CardInfo
      trending={trending}
      mediaType={mediaType}
      year={year}
    >
      {children}
    </CardInfo>
  </div>
);

export default Card;
