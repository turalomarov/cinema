import {
  FC, PropsWithChildren, useCallback, useMemo, useRef, useState,
} from 'react';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import Heading from '../Heading';

interface CollectionProps extends PropsWithChildren {
  href:string;
  category?: 'movie' | 'tv';
  title: string;
}

const Collection:FC<CollectionProps> = ({
  href,
  title,
  category,
  children,
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const onScroll = useCallback(() => {
    if (rowRef.current) {
      const { scrollLeft } = rowRef.current;
      if (scrollLeft === 0) {
        setIsMoved(false);
      } else if (!isMoved) {
        setIsMoved(true);
      }
    }
  }, [isMoved]);
  const handleClick = useCallback((direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;

      let scrollTo = direction === 'left'
        ? scrollLeft - clientWidth / 1.5
        : scrollLeft + clientWidth / 1.5;

      // if reached the end return to start
      if (direction === 'right' && scrollWidth - clientWidth === scrollLeft) {
        scrollTo = 0;
      }

      if (scrollTo <= 0) {
        setIsMoved(false);
      }

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }, []);

  const isTrending = useMemo(() => title.toLowerCase() === 'trending', [title]);

  return (
    <section
      className={
          isTrending
            ? 'h-full w-full relative'
            : 'relative' // mb-6 md:mb-10
          }
    >
      <Heading
        title={title}
        href={href}
        category={category}
      />
      <section
        onScroll={onScroll}
        ref={rowRef}
        className={
            isTrending
              ? 'overflow-x-scroll scrollbar-hide scrollbar-hide'
              : 'card-collection-wrapper overflow-x-scroll scrollbar-hide'
            }
      >
        <AiOutlineArrowLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-6 w-6 cursor-pointer transition hover:scale-125 text-app-grey ${
            !isMoved && 'opacity-0 pointer-events-none'
          }`}
          onClick={() => handleClick('left')}
        />

        <div className="flex relative gap-x-4 sm:gap-x-10 2xs:mt-2 pt-6 pb-12">
          {children}
        </div>
        <AiOutlineArrowRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-6 w-6 cursor-pointer opacity-0 transition hover:scale-125 opacity-100 text-app-grey"
          onClick={() => handleClick('right')}
        />
      </section>
    </section>
  );
};

export default Collection;
