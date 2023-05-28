import { useCallback, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CardGenre from '@app/components/CardGenre';
import { useFetch, useInfiniteScroll } from '@app/hooks';
import { Genre, MediaType } from '@app/api/tmdb/types';
import Movies from '@app/pages/Movies';
import TVseries from '@app/pages/TVseries';
import CollectionSearch from '@app/components/CollectionSearch';
import Card from '@app/components/Card';
import Loader from '@app/components/Loading';
import MediaGenres from '@app/components/MediaGenres';
import VideoCard from '@app/components/VideoCard';

type Params = {
  mediaType: MediaType;
};

const Media = () => {
  const { mediaType } = useParams<Params>();
  const [searchParams, setSearchParams] = useSearchParams();

  const { useFetchGenreList, useFetchDiscover } = useFetch();
  const { data } = useFetchGenreList(mediaType as MediaType);
  const {
    data: discoverData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useFetchDiscover(mediaType as MediaType, searchParams?.get('genres') as string);
  const ref = useInfiniteScroll(fetchNextPage, hasNextPage);

  const handleGenreSelection = useCallback((id:number) => {
    const stringId = id.toString();

    const paramsGenres = searchParams.get('genres')?.split('|') || [];

    if (!paramsGenres.includes(stringId)) {
      paramsGenres.push(stringId);
      setSearchParams({ genres: paramsGenres.join('|') });
    } else {
      const filteredParams = paramsGenres.filter((paramId) => paramId !== stringId);

      setSearchParams((prev) => {
        if (filteredParams.length) {
          prev.set('genres', filteredParams.join('|'));
        } else {
          prev.delete('genres');
        }
        return prev;
      });
    }
  }, [searchParams, setSearchParams]);

  const mediaTypeComponent = useMemo(
    () => (mediaType === 'movie' ? <Movies /> : <TVseries />),
    [mediaType],
  );

  const selectedGenres:Array<Genre> = useMemo(() => {
    const selectedIds = searchParams.get('genres')?.split('|') || [];
    return data?.genres
      .filter((genre) => selectedIds.includes(genre.id.toString()))
      .sort((a, b) => selectedIds.indexOf(a.id.toString()) - selectedIds.indexOf(b.id.toString()))
      || [];
  }, [searchParams, data]);

  return (
    <>
      <section>
        <div className="flex overflow-auto pb-5 p-2">
          {
            data?.genres?.map((genre) => (
              <CardGenre
                onClick={() => { handleGenreSelection(genre.id); }}
                key={genre.id}
                selected={searchParams.get('genres')?.includes(genre.id.toString())}
              >
                {genre.name}
              </CardGenre>
            ))
          }
        </div>
        {!!selectedGenres.length && <MediaGenres genres={selectedGenres} />}
      </section>
      {
        searchParams.size > 0 && (
          <>
            <CollectionSearch>
              {discoverData?.pages.map((page) => (
                page.results.map((media, index, array) => (
                  <VideoCard
                    ref={index === array.length - 1 ? ref : undefined}
                    key={media.id}
                    id={media.id}
                    mediaType={mediaType as MediaType}
                  >
                    <Card
                      id={media.id}
                      mediaType={mediaType as MediaType}
                      year={media.release_date ?? media.first_air_date}
                      path={media.backdrop_path ?? media.poster_path}
                    >
                      {media.title ?? media.name}
                    </Card>
                  </VideoCard>
                ))
              ))}
            </CollectionSearch>
            {(isLoading || isFetchingNextPage) && <Loader />}
          </>
        )
       }
      {searchParams.size === 0 && mediaTypeComponent}
    </>
  );
};

export default Media;
