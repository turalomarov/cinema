import { FC } from 'react';

interface MediaHeadingProps {
  title: string
  tagline: string;
}

const MediaHeading:FC<MediaHeadingProps> = ({ title, tagline }) => (
  <div className="mt-6 mb-2 text-center md:mt-0 md:mb-4 md:text-left">
    <h1 className="mb-1 text-3xl font-light md:mb-3 md:text-5xl text-app-white">{title}</h1>
    <h2 className="text-xs font-light text-app-placeholder sm:text-sm md:text-lg">
      {tagline}
    </h2>
  </div>
);

export default MediaHeading;
