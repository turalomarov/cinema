import { FC } from 'react';
import { MediaType } from '@app/api/tmdb/types';
import { getYear, toHoursAndMinutes } from '@app/utils';

interface MediaInfoProps {
  firstAir?: string;
  lastAir?: string;
  language: string;
  length?: number;
  mediaType?: MediaType;
  status: string;
  releaseDate?: string;
}
// Todo fix spoken languages maybe find iso lang by key
const MediaInfo:FC<MediaInfoProps> = ({
  firstAir,
  lastAir,
  language,
  length,
  mediaType = 'movie',
  status,
  releaseDate,
}) => (
  mediaType === 'movie' ? (
    <div className="mb-6 flex items-center justify-between text-left text-sm lg:w-10/12 lg:text-lg">
      <div>
        <p className="mb-1 text-app-placeholder">Length</p>
        <p className="text-app-white">{toHoursAndMinutes(length)}</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">Language</p>
        <p className="text-app-white">{language}</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">Year</p>
        <p className="text-app-white">{getYear(releaseDate)}</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">Status</p>
        <p className="text-app-white">{status}</p>
      </div>
    </div>
  ) : (
    <div className="mb-6 flex items-center justify-between text-left text-sm lg:w-11/12 lg:text-lg">
      <div>
        <p className="mb-1 text-app-placeholder">Language</p>
        <p className="text-app-white">{language}</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">First Air</p>
        <p className="text-app-white">{getYear(firstAir)}</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">Last Air</p>
        <p className="text-app-white">{getYear(lastAir)}</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">Status</p>
        <p className="text-app-white">{status}</p>
      </div>
    </div>
  )
);

export default MediaInfo;
