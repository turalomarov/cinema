import { useParams } from 'react-router-dom';
import Title from '@app/components/Title';
import CollectionSearch from '@app/components/CollectionSearch';
import Card from '@app/components/Card';
import { useFetch, useInfiniteScroll } from '@app/hooks';

import Loader from '@app/components/Loading';
import type { MediaType } from '@app/api/tmdb/types';
import VideoCard from '@app/components/VideoCard';

const Category = () => {
  const { category, mediaType } = useParams();
  const { useFetchMediaList } = useFetch();

  const {
    data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage,
  } = useFetchMediaList(mediaType as MediaType, category?.replaceAll('-', '_') || '');

  const ref = useInfiniteScroll(fetchNextPage, hasNextPage);

  if (!data || isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Title>
        {category}
      </Title>
      <CollectionSearch>
        {
          data.pages?.map((page) => (
            page.results.map((media, index, array) => (
              <VideoCard
                key={media.id}
                ref={index === array.length - 1 ? ref : undefined}
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

export default Category;
