import { useMemo } from 'react';
import Collection from '@app/components/Collection';
import Card from '@app/components/Card';
import { useFetch } from '@app/hooks';
import { IMovie, ListResponse } from '@app/api/tmdb/types';
import VideoCard from '@app/components/VideoCard';

interface IRow {
  title: string;
  key:string;
}

interface IMovieRows extends IRow {
  data: ListResponse<IMovie> | undefined;
}

const Movies = () => {
  const { useFetchMovies } = useFetch();
  const { results: movieResults } = useFetchMovies();

  const moviesRows: IMovieRows[] = useMemo(() => {
    const [
      trending,
      popular,
      nowPlaying,
      upcoming,
      topRated,
    ] = movieResults;

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
        title: 'Now playing',
        key: 'now-playing',
        data: nowPlaying.data,
      },
      {
        title: 'Upcoming',
        key: 'upcoming',
        data: upcoming.data,
      },
      {
        title: 'Top rated',
        key: 'top-rated',
        data: topRated.data,
      },
    ];
  }, [movieResults]);

  return (
    <>
      {
        moviesRows.map((row) => (
          <Collection
            key={row.key}
            href={`/browse/${row.key}/movie`}
            title={row.title}
            category="movie"
          >
            {
              row.data?.results?.map((movie) => (
                <VideoCard
                  key={movie.id}
                  id={movie.id}
                  mediaType="movie"
                  trending={row.key.toLowerCase() === 'trending'}
                >
                  <Card
                    id={movie.id}
                    mediaType="movie"
                    year={movie.release_date}
                    trending={row.key.toLowerCase() === 'trending'}
                    path={movie.backdrop_path ?? movie.poster_path}
                  >
                    {movie.title}
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

export default Movies;
