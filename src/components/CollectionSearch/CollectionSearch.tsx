import {
  FC, PropsWithChildren, Children, isValidElement, cloneElement, JSX,
} from 'react';

const CollectionSearch:FC<PropsWithChildren> = ({
  children,
}) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as JSX.Element, { isSearch: true });
    }
    return child;
  });

  return (
    <section
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-x-7 sm:gap-y-6 xl:gap-x-10 xl:gap-y-8"
    >
      {childrenWithProps}
    </section>
  );
};

export default CollectionSearch;
