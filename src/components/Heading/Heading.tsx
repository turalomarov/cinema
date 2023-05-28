import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface HeadingProps {
  href: string;
  category?: 'movie' | 'tv';
  title: string;
}

const Heading:FC<HeadingProps> = ({
  href,
  category,
  title,
}) => (
  <div className={classNames(
    'flex items-end justify-between',
  )}
  >
    {category ? (
      <div className="flex items-end">
        <h2 className="section-title py-px sm:py-0 app-white">{title}</h2>
        <p
          className={
              category === 'movie'
                ? 'ml-2 rounded-md border-2 py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-white sm:ml-4 sm:text-[10px]'
                : 'ml-2 rounded-md border-2 border-app-white bg-app-white py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-dark-blue sm:ml-4 sm:text-[10px] '
            }
        >
          {category}
        </p>
      </div>
    ) : (
      <h2 className="section-title">{title}</h2>
    )}
    <Link
      to={href}
      className="cursor-pointer text-xs font-medium uppercase tracking-wide text-app-grey-blue hover:underline"
    >
      See more
    </Link>
  </div>
);

export default Heading;
