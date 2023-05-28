import { FC } from 'react';

interface MediaCastsProps {
  casts: Array<{
    name: string
    credit_id: string;
  }>
}

const MediaCasts:FC<MediaCastsProps> = ({ casts }) => (
  <div className="mb-10">
    <h3 className="mb-2 md:text-lg text-app-white">Casts</h3>
    <ul className="flex flex-wrap text-xs md:text-sm gap-1.5">
      {
          casts.map((cast) => (
            <li
              key={cast.credit_id}
              className="border-[1px] py-px px-2 text-app-white border-[1px] py-px px-2 text-app-white"
            >
              {cast.name}
            </li>
          ))
        }
    </ul>
  </div>
);

export default MediaCasts;
