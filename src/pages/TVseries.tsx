import { useMemo } from 'react';
import Card from '@app/components/Card';
import Collection from '@app/components/Collection';
import { useFetch } from '@app/hooks';
import { ITV, ListResponse } from '@app/api/tmdb/types';
import VideoCard from '@app/components/VideoCard';

interface IRow {
  title: string;
  key:string;
}

interface ITVRows extends IRow {
  data: ListResponse<ITV> | undefined;
}

const TVseries = () => {
  const { useFetchTVs } = useFetch();

  const { results: tvResults } = useFetchTVs();

  const tvRows: ITVRows[] = useMemo(() => {
    const [
      trending,
      popular,
      nowPlaying,
      upcoming,
      topRated,
    ] = tvResults;

    return [
      {
        title: 'Trending',
        key: 'trending',
        data: trending.data,
      },
      {
        title: 'Popular',
        key: 'popular',
        data: popular.data,
      },
      {
        title: 'Airing today',
        key: 'airing-today',
        data: nowPlaying.data,
      },
      {
        title: 'On the air',
        key: 'on-the-air',
        data: upcoming.data,
      },
      {
        title: 'Top rated',
        key: 'top-rated',
        data: topRated.data,
      },
    ];
  }, [tvResults]);

  return (
    <>
      {
        tvRows.map((row) => (
          <Collection
            key={row.key}
            href={`/browse/${row.key}/tv`}
            title={row.title}
            category="tv"
          >
            {
              row.data?.results?.map((tv) => (
                <VideoCard
                  key={tv.id}
                  id={tv.id}
                  mediaType="tv"
                  trending={row.key.toLowerCase() === 'trending'}
                >
                  <Card
                    id={tv.id}
                    mediaType="tv"
                    year={tv.first_air_date}
                    trending={row.key.toLowerCase() === 'trending'}
                    path={tv.backdrop_path ?? tv.poster_path}
                  >
                    {tv.name}
                  </Card>
                </VideoCard>
              ))
            }
          </Collection>
        ))
      }
    </>
  );
};

export default TVseries;
