import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query';

const useInfiniteScroll = (
  fn: (options?: FetchNextPageOptions)=>Promise<InfiniteQueryObserverResult>,
  condition: boolean = false,
) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && condition) {
      // do action
      fn();
    }
  }, [inView, condition, fn]);

  return ref;
};

export default useInfiniteScroll;
