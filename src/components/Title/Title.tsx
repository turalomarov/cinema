import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface TitleProps extends PropsWithChildren {
  className?: string;
}

const Title:FC<TitleProps> = ({ children, className }) => (
  <h1 className={
    classNames(
      'md:heading-lg mb-6 text-xl font-light capitalize lg:mb-10 text-app-white',
      className,
    )
  }
  >
    {children}
  </h1>
);

export default Title;
