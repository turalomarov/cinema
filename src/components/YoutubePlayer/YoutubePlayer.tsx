import {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import ReactPlayer, { YouTubePlayerProps } from 'react-player/youtube';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import {
  BsFillPlayFill, BsPauseCircleFill,
} from 'react-icons/bs';
import { GoMute, GoUnmute } from 'react-icons/go';
import { ImInfo } from 'react-icons/im';
import { useFetch } from '@app/hooks';
import { MediaType } from '@app/api/tmdb/types';
import noTrailer from '@app/assets/no-trailer.webp';

interface YoutubePlayerProps extends YouTubePlayerProps {
  id: number;
  show: boolean;
  mediaType: MediaType;
}

const allowedVideos:Array<string> = ['Trailer', 'Clip'];

const YoutubePlayer:FC<YoutubePlayerProps> = ({
  id,
  show,
  mediaType,
  controls,
  onPause,
  onPlay,
  onReady,
  ...playerProps
}) => {
  const { useFetchVideos } = useFetch();

  const { data, refetch } = useFetchVideos(mediaType, id);
  const [playing, setPlaying] = useState<boolean>(true);
  const [muted, setMuted] = useState<boolean>(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (show) {
      refetch();
    }
  }, [show, refetch]);

  const handlePause = useCallback(() => {
    setPlaying(false);
    if (onPause) {
      onPause();
    }
  }, [onPause]);

  const handlePlay = useCallback(() => {
    setPlaying(true);
    if (onPlay) {
      onPlay();
    }
  }, [onPlay]);

  const togglePlaying = useCallback(() => {
    setPlaying(!playing);
  }, [playing]);

  const toggleMute = useCallback(() => {
    setMuted(!muted);
  }, [muted]);

  const youtubeKey = useMemo(
    () => data?.results?.findLast((video) => allowedVideos.includes(video.type))?.key,
    [data],
  );

  return (
    show ? (
      <>
        {
        youtubeKey ? (
          <ReactPlayer
            onError={() => {
              setError(true);
            }}
            width="100%"
            height="100%"
            className="absolute inset-0"
            url={`https://www.youtube.com/watch?v=${youtubeKey}`}
            playing={playing}
            muted={muted}
            loop
            controls={controls}
            onPause={handlePause}
            onPlay={handlePlay}
            onReady={onReady}
            {...playerProps}
          />
        ) : (
          <img
            alt="No trailer available"
            src={noTrailer}
            className="w-full h-full absolute inset-0"
          />
        )
      }
        {
        !controls && (
          <div className="cursor-default absolute bottom-2.5 left-4 text-app-white gap-x-4 flex">
            <button
              type="button"
              onClick={togglePlaying}
              className={classNames({
                hidden: !youtubeKey || error,
              })}
            >
              {playing ? <BsPauseCircleFill /> : <BsFillPlayFill />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className={classNames({
                hidden: !youtubeKey || error,
              })}
            >
              {muted ? <GoMute /> : <GoUnmute />}
            </button>
            <Link to={`/details/${mediaType}/${id}`}>
              <ImInfo />
            </Link>
          </div>
        )
      }
      </>
    ) : null
  );
};

export default YoutubePlayer;
