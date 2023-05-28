import {
  ChangeEvent, FC, useCallback, useRef, useState,
} from 'react';
import classNames from 'classnames';
import useOnClickOutside from '@app/hooks/useOnClickOutside';
import SearchIcon from '../icons/SearchIcon';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const SearchBar:FC<SearchBarProps> = ({
  placeholder = 'Search for movies or TV series',
  onChange,
  value = '',
}) => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useOnClickOutside(ref, () => {
    setShow(false);
  });

  const toggle = useCallback(() => {
    setShow(!show);
    if (!show) {
      inputRef.current?.focus();
    }
  }, [show]);

  return (
    <div className="flex grow pb-6 md:pb-10 lg:mt-9 justify-end">
      <div ref={ref} className="flex w-full sm:w-2/5 justify-end">
        <SearchIcon onClick={toggle} className="h-6 w-6 text-app-white cursor-pointer" />
        <input
          ref={inputRef}
          className={classNames(
            'mx-4 rounded-none transition-all ease-in-out duration-700',
            'border-b border-app-dark-blue bg-app-dark-blue pb-[8px] caret-app-white outline-none',
            'text-base font-light placeholder:text-base placeholder:text-app-placeholder transition-all',
            'focus:border-b focus:border-app-grey-blue text-app-white placeholder-shown:truncate',
            {
              'w-[90%] opacity-100': show,
              'w-0 opacity-0': !show,
            },
          )}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchBar;
