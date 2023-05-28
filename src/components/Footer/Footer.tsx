import { FC, PropsWithChildren } from 'react';

const Footer:FC<PropsWithChildren> = ({ children }) => (
  <footer className="w-full text-center text-xs text-app-grey-blue mb-5">
    {children ?? <p>Some footer text</p>}
  </footer>
);

export default Footer;
