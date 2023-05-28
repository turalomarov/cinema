import { FC, PropsWithChildren } from 'react';

const MediaSynopsis:FC<PropsWithChildren> = ({ children }) => (
  <div className="mb-6">
    <h3 className="mb-1 md:text-lg text-app-white">Synopsis</h3>
    <p className="font-light text-app-white">{children || 'N/A'}</p>
  </div>
);

export default MediaSynopsis;
