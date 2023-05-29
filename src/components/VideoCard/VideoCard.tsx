import {
  forwardRef, PropsWithChildren, useCallback, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import YoutubePlayer from '@app/components/YoutubePlayer';
import { MediaType } from '@app/api/tmdb/types';

interface VideoCardProps extends PropsWithChildren {
  id: number;
  mediaType: MediaType;
  isSearch?: boolean;
  trending?: boolean;
}

const VideoCard = forwardRef<HTMLDivElement, VideoCardProps>(({
  id,
  isSearch = false,
  mediaType,
  trending = false,
  children,
}, ref) => {
  const [show, setShow] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);
  const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement | null >(null);

  useEffect(() => {
    const hasTouchScreen = (
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(navigator.userAgent)
      || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent)
    );
    setIsTouchScreen(hasTouchScreen);
  }, []);

  const handleMouseEnter = () => {
    if (!isTouchScreen) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    setShow(false);
    setReady(false);
  };

  const handleReady = useCallback(() => {
    setReady(true);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(
        'transition-all duration-500 ease-in-out group',
        '',
        {
          'hover:scale-[1.3] hover:translate-y-2.5 last:hover:-translate-x-[70px] hover:z-10': !isSearch,
          'first:hover:translate-x-[70px]': !isSearch && trending,
          'first:hover:translate-x-[45px]': !isSearch && !trending,
          'hover:scale-[1.1]': isSearch,
        },
      )}
    >
      <div
        ref={ref}
        className={classNames(
          {
            'relative h-[140px] w-[230px] xs:w-[300px] sm:h-[230px] sm:w-[470px]': trending,
            'relative mb-4 grow basis-1/5 duration-500 h-[133px] md:h-[140px] lg:h-[174px]': !trending,
            'w-full': !trending && isSearch,
            'w-[150px] sm:w-[180px] sm:w-[200px] lg:w-[268px] group-hover:w-[200px] sm:group-hover:w-[300px]': !trending && !isSearch,
          },
        )}
      >
        <YoutubePlayer
          show={show}
          id={id}
          mediaType={mediaType}
          onReady={handleReady}
        />
        <Link
          to={`/details/${mediaType}/${id}`}
          className={classNames('w-full absolute transition-all duration-1000', {
            'group-hover:opacity-0 group-hover:pointer-events-none': ready,
          })}
          onClick={(event) => {
            if (isTouchScreen) {
              event.preventDefault();
              setShow(true);
            }
          }}
        >
          {children}
        </Link>
      </div>
    </div>
  );
});

export default VideoCard;
