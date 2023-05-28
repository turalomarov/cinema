import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import AppLogo from '../icons/AppIcon';
import { NavHome, NavMovie, NavTV } from '../icons';

const Navigation:FC = () => (
  <nav className={classNames(
    'sticky top-0 z-50 flex items-center justify-between bg-app-semi-dark-blue md:rounded-[10px]',
    'p-5 md:mx-6 md:mt-6 md:mb-[33px] lg:fixed lg:left-0 lg:mr-0 lg:h-5/6 lg:flex-col lg:py-9 text-app-white',
  )}
  >
    <a href="/">
      <AppLogo />
    </a>
    <div className="flex w-1/2 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5">
      <Link to="/">
        <NavHome />
      </Link>
      <Link to="/movie">
        <NavMovie />
      </Link>
      <Link to="/tv">
        <NavTV />
      </Link>
      {/* //Todo add bookmarks page */}
      {/* <NavigationIcon href="/bookmark">
          <IconNavBookmark />
        </NavigationIcon> */}
    </div>
    {/* //Todo implement user auth */}
    {/* <a href="https://github.com/Sayan-Maity" target="_blank" rel="noreferrer"> */}
    {/*  <div className="flex items-center justify-center rounded-full bg-cyan-200 p-px"> */}
    {/*    <img */}
    {/*      className="rounded-full w-[25px] h-[25px]" */}
    {/*      src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" */}
    {/*      alt="user avatar" */}
    {/*    /> */}
    {/*  </div> */}
    {/* </a> */}
  </nav>
);

export default Navigation;
