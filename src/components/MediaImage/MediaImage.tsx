import { FC } from 'react';
import noImagePoster from '@app/assets/no-image-poster.webp';

interface MediaImageProps {
  path: string | null;
  alt: string;
}

const MediaImage:FC<MediaImageProps> = ({ path, alt }) => (
  <section className="flex justify-center px-20 text-center md:pr-8 md:pl-0 lg:w-2/5">
    <img
      className="rounded-lg w-[350px] sm:h-[530px]"
      src={!path ? noImagePoster : `https://image.tmdb.org/t/p/original${path}`}
      alt={alt}
      placeholder="blur"
    />
  </section>
);

export default MediaImage;
