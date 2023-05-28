import {
  ChangeEvent, FC, PropsWithChildren, useCallback, useEffect, useState,
} from 'react';
import {
  Outlet, useLocation, useNavigate, useSearchParams,
} from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { GITHUB_PROJECT_NAME } from '@app/config';
import SearchBar from '../SearchBar';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout:FC<PropsWithChildren> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [returnLocation, setReturnLocation] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSearch = useCallback((e:ChangeEvent<HTMLInputElement>) => {
    if (location.pathname !== '/search') {
      setReturnLocation(location.pathname + location.search);
      navigate('/search');
    } else if (e.target.value.length === 0) {
      navigate(returnLocation);
      setReturnLocation('');
    }

    // Removing query if no text in input
    if (e.target.value.length > 0) {
      setSearchParams({ query: e.target.value });
    } else {
      searchParams.delete('query');
    }
  }, [setSearchParams, location, navigate, returnLocation, searchParams]);

  return (
    <div className="text-app-white flex flex-col">
      <div className="lg:flex">
        <Navigation />
        <main className="mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow">
          <SearchBar onChange={handleSearch} value={searchParams.get('query') || ''} />
          <Outlet />
        </main>
      </div>
      <Footer>
        <p className="flex items-center justify-center gap-2">
          See project on
          <a
            target="_blank"
            href={`https://github.com/turalomarov/${GITHUB_PROJECT_NAME}`}
            rel="noreferrer"
          >
            <FaGithub className="text-app-white text-base" />
          </a>
        </p>
      </Footer>
    </div>
  );
};

export default Layout;
