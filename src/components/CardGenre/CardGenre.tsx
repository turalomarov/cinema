import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface CardGenreProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  className?: string;
  selected?: boolean;
}

const CardGenre = forwardRef<HTMLDivElement, CardGenreProps>(
  ({
    children,
    className,
    selected = false,
    ...props
  }, ref) => (
    <div
      ref={ref}
      className={classNames(
        'transition-all ease-in-out duration-500 hover:scale-110 mr-4 mb-2 flex w-auto cursor-pointer',
        'items-center justify-center rounded-lg p-2 h-10 whitespace-nowrap px-5',
        'text-center text-base font-medium text-app-white w-fit',
        {
          'bg-app-dark-green': selected,
          'bg-app-semi-dark-blue': !selected,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

export default CardGenre;
