import {
  useInfiniteQuery, useQueries, useQuery, UseQueryResult,
} from '@tanstack/react-query';
import {
  fetchCredits, fetchDetails, fetchMediaList, fetchMulti, fetchTrending,
} from '@app/api';
import {
  ListResponse, MediaType,
} from '@app/api/tmdb/types';
import { fetchDiscover, fetchGenreList, fetchVideos } from '@app/api/tmdb';
import type { IMovie, ITV } from '@app/api/tmdb/fetchMediaList';
import type { IMediaCredits } from '@app/api/tmdb/fetchCredits';
import type { IMediaMulti } from '@app/api/tmdb/fetchMulti';
import type { GenreList } from '@app/api/tmdb/fetchGenreList';
import type { IVideo } from '@app/api/tmdb/fetchVideos';

interface IVideoList {
  id: number;
  results: Array<IVideo>
}

const handleNextPageParam = <T>(lastPage:ListResponse<T>, allPages:ListResponse<T>[]) => {
  const LIMIT = 20;
  return lastPage.results?.length === LIMIT
    ? allPages.length + 1
    : undefined;
};

const useFetch = () => {
  const useFetchMovies = () => {
    const category = 'movie';
    const res = useQueries<Array<ListResponse<IMovie>>>({
      queries: [
        { queryKey: ['trending-movie'], queryFn: () => fetchTrending(category) },
        { queryKey: ['popular-movie'], queryFn: () => fetchMediaList(category, 'popular') },
        { queryKey: ['now-playing-movie'], queryFn: () => fetchMediaList(category, 'now_playing') },
        { queryKey: ['upcoming-movie'], queryFn: () => fetchMediaList(category, 'upcoming') },
        { queryKey: ['top-rated-movie'], queryFn: () => fetchMediaList(category, 'top_rated') },
      ],
    });

    const isLoading = res.some((query) => query.isLoading);

    return {
      results: res as UseQueryResult<ListResponse<IMovie>>[],
      isLoading,
    };
  };

  const useFetchTVs = () => {
    const category = 'tv';
    const res = useQueries<Array<ListResponse<ITV>>>({
      queries: [
        { queryKey: ['trending-tv'], queryFn: () => fetchTrending(category) },
        { queryKey: ['popular-tv'], queryFn: () => fetchMediaList(category, 'popular') },
        { queryKey: ['airing-today-tv'], queryFn: () => fetchMediaList(category, 'airing_today') },
        { queryKey: ['on-the-air-tv'], queryFn: () => fetchMediaList(category, 'on_the_air') },
        { queryKey: ['top-rated-tv'], queryFn: () => fetchMediaList(category, 'top_rated') },
      ],
    });

    const isLoading = res.some((query) => query.isLoading);

    return {
      results: res as UseQueryResult<ListResponse<ITV>>[],
      isLoading,
    };
  };

  const useFetchMediaList = (
    mediaType: MediaType,
    category: string,
  ) => useInfiniteQuery<ListResponse<IMovie & ITV>>({
    queryKey: ['media-list', category, mediaType],
    queryFn: ({ pageParam = 1 }) => (
      category === 'trending'
        ? fetchTrending(mediaType, { page: pageParam })
        : fetchMediaList(mediaType, category, { page: pageParam })),
    getNextPageParam: handleNextPageParam,
  });

  const useFetchDetails = <T>(mediaType: MediaType, id: string) => useQuery<T>({
    queryKey: [`${mediaType}-${id}`],
    queryFn: () => fetchDetails(mediaType, id),
  });

  const useFetchCredits = (mediaType: MediaType, id: string) => useQuery<IMediaCredits>({
    queryKey: [`credits-${mediaType}-${id}`],
    queryFn: () => fetchCredits(mediaType, id),
  });

  const useFetchMulti = (query: string) => useInfiniteQuery<ListResponse<IMediaMulti>>({
    queryKey: ['multi-search', query],
    queryFn: ({ signal, pageParam = 1 }) => fetchMulti({ query, page: pageParam }, signal),
    getNextPageParam: handleNextPageParam,
  });

  const useFetchGenreList = (mediaType: MediaType) => useQuery<GenreList>(
    ['genre-list', mediaType],
    () => fetchGenreList(mediaType),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  const useFetchDiscover = (
    mediaType: MediaType,
    genreIds:string,
  ) => useInfiniteQuery<ListResponse<IMediaMulti>>(
    ['discover', mediaType, genreIds],
    ({ signal, pageParam = 1 }) => fetchDiscover(
      mediaType,
      { genreIds, page: pageParam },
      signal,
    ),
    {
      enabled: !!genreIds,
      refetchOnMount: false,
      getNextPageParam: handleNextPageParam,
    },
  );

  const useFetchVideos = (mediaType: MediaType, id: number) => useQuery<IVideoList>(
    ['video', mediaType, id],
    () => fetchVideos(mediaType, id),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

  return {
    useFetchMovies,
    useFetchTVs,
    useFetchMediaList,
    useFetchDetails,
    useFetchCredits,
    useFetchMulti,
    useFetchGenreList,
    useFetchDiscover,
    useFetchVideos,
  };
};

export default useFetch;
