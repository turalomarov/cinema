import {
  useCallback, useRef, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { FaPlay, FaStop } from 'react-icons/fa';
import MediaImage from '@app/components/MediaImage';
import MediaHeading from '@app/components/MediaHeading';
import MediaRating from '@app/components/MediaRating';
import MediaInfo from '@app/components/MediaInfo';
import MediaGenres from '@app/components/MediaGenres';
import MediaSynopsis from '@app/components/MediaSynopsis';
import MediaCasts from '@app/components/MediaCasts';
import MediaResources from '@app/components/MediaResources';
import Loader from '@app/components/Loading';
import YoutubePlayer from '@app/components/YoutubePlayer';
import { useFetch } from '@app/hooks';
import { MediaType, IMovieDetails, ITVDetails } from '@app/api/tmdb/types';

type Params = {
  id: string | undefined;
  mediaType: MediaType | undefined;
};
const MediaDetails = () => {
  const [show, setShow] = useState<boolean>(false);
  const { mediaType, id } = useParams<Params>();
  const { useFetchDetails, useFetchCredits } = useFetch();
  const ref = useRef<HTMLButtonElement | null>(null);

  const { data, isLoading } = useFetchDetails<IMovieDetails & ITVDetails>(mediaType as MediaType, id || '');
  const { data: credits, isLoading: creditsLoading } = useFetchCredits(mediaType as MediaType, id || '');

  const handlePlay = useCallback(() => {
    setShow(!show);
  }, [show]);

  if (!data || !credits || creditsLoading || isLoading) {
    return <Loader />;
  }

  return (
    <section className="flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center">
      <MediaImage
        path={data.poster_path}
        alt={data.title ?? data.name}
      />
      <section className="md:w-3/5">
        <MediaHeading
          title={data.title ?? data.name}
          tagline={data.tagline}
        />
        <MediaRating rating={data.vote_average} />
        <MediaInfo
          length={data.runtime}
          language={data.original_language.toUpperCase()}
          mediaType={mediaType}
          status={data.status}
          releaseDate={data.release_date}
          firstAir={data.first_air_date}
          lastAir={data.last_air_date}
        />
        <MediaGenres genres={data.genres} />
        <MediaSynopsis>
          {data.overview}
        </MediaSynopsis>
        <MediaCasts casts={credits.cast} />
        <MediaResources
          website={data.homepage}
          imdb={data.imdb_id}
        />
        <div>
          <div className={classNames('relative transition-all ease-in-out duration-700', {
            'h-96': show,
            'h-0': !show,
          })}
          >
            <YoutubePlayer
              show={show}
              id={Number(id)}
              mediaType={mediaType as MediaType}
              controls
            />
          </div>
          <button
            ref={ref}
            type="button"
            onClick={handlePlay}
            className={classNames(
              'my-4 flex w-full cursor-pointer items-center justify-between rounded-md border-none',
              'bg-app-semi-dark-blue py-4 px-8 text-sm font-medium text-app-white hover:bg-app-grey-blue',
            )}
          >
            <p>Trailer</p>
            {show ? <FaStop className="text-base" /> : <FaPlay className="text-base" /> }
          </button>
        </div>
      </section>
    </section>
  );
};

export default MediaDetails;
