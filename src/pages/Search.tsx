import { useSearchParams } from 'react-router-dom';
import { FC, useMemo } from 'react';
import { useDebounce, useFetch, useInfiniteScroll } from '@app/hooks';
import CollectionSearch from '@app/components/CollectionSearch';
import Card from '@app/components/Card';
import Loader from '@app/components/Loading';
import VideoCard from '@app/components/VideoCard';

const Search:FC = () => {
  const { useFetchMulti } = useFetch();
  const [searchParams] = useSearchParams();

  const debouncedQuery = useDebounce<string | null>(searchParams.get('query'), 350);
  const {
    data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage,
  } = useFetchMulti(debouncedQuery || '');

  const ref = useInfiniteScroll(fetchNextPage, hasNextPage);

  const searchedMedia = useMemo(
    () => data?.pages?.map((page) => page.results?.filter((media) => media.media_type !== 'person')),
    [data],
  );
  if (!searchedMedia || isLoading) {
    return <Loader />;
  }

  return (
    <>
      <CollectionSearch>
        {
          searchedMedia.map((item) => (
            item.map((media, index) => (
              <VideoCard
                key={media.id}
                ref={index === item.length - 1 ? ref : undefined}
                id={media.id}
                mediaType={media.media_type ?? 'tv'}
              >
                <Card
                  id={media.id}
                  mediaType={media.media_type ?? 'tv'}
                  year={media.release_date ?? media.first_air_date}
                  path={media.backdrop_path ?? media.poster_path}
                >
                  {media.title ?? media.name}
                </Card>
              </VideoCard>
            ))
          ))
        }
      </CollectionSearch>
      {isFetchingNextPage && <Loader />}
    </>
  );
};

export default Search;
