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
      },
      {
        path: '/:mediaType',
        element: <Media />,
      },
      {
        path: 'browse/:category/:mediaType',
        element: <Category />,
      },
      {
        path: 'details/:mediaType/:id',
        element: <MediaDetails />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
