import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import classNames from 'classnames';
import noImage from '@app/assets/no-image.webp';
import noImageLow from '@app/assets/no-image-low.webp';

interface CardImageProps {
  trending?: boolean;
  path: string | null;
  alt: string;
}

const CardImage:FC<CardImageProps> = ({
  trending = false,
  path,
  alt,
}) => (
  <div className="w-full rounded-lg">
    <div
      className={
        trending
          ? 'relative h-[140px] w-[240px] sm:h-[230px] sm:w-[470px]'
          : 'relative h-[133px] md:h-[140px] lg:h-[174px]'
      }
    >
      <ProgressiveImage
        delay={250}
        rootMargin="0% 0% 25%"
        src={!path ? noImage : `https://image.tmdb.org/t/p/w1280${path}`}
        placeholder={!path ? noImageLow : `https://image.tmdb.org/t/p/w200${path}`}
      >
        {(src, loading) => (
          <img
            className={classNames('rounded-lg absolute object-cover w-full h-full transition-all', {
              'blur-sm opacity-50': loading,
            })}
            src={src}
            alt={alt}
          />
        )}
      </ProgressiveImage>
    </div>
  </div>
);

export default CardImage;
