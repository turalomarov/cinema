import { createBrowserRouter } from 'react-router-dom';
import {
  Home, NotFound, MediaDetails, Category, Search, Media,
} from '@app/pages';
import Layout from '@app/components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        // errorElement: <NotFound />,
      },
      {
        path: '/:mediaType',
        element: <Media />,
      },
      // {
      //   path: '/tvs',
      //   element: <TVseries />,
      // },
      {
        path: 'browse/:category/:mediaType',
        element: <Category />,
        // errorElement: <NotFound />,
      },
      {
        path: 'details/:mediaType/:id',
        element: <MediaDetails />,
        // errorElement: <NotFound />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      // {
      //   path: '/tv/:id',
      //   element: <MediaDetails />,
      //   errorElement: <NotFound />,
      // },

    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
