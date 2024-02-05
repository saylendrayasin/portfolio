import { createBrowserRouter } from 'react-router-dom';
import PageHome from './pages/PageHome/PageHome';
import PageAbout from './pages/PageAbout/PageAbout';
import PagePortofolio from './pages/PagePortofolio/PagePortofolio';
import PageContact from './pages/PageContact/PageContact';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PORTOFLIO: '/portfolio',
  CONTACT: '/contact',
};

export const routerList = [
  {
    path: ROUTES.HOME,
    element: <PageHome />,
    children: [
      {
        path: ROUTES.ABOUT,
        element: <PageAbout />,
      },
      {
        path: ROUTES.PORTOFLIO,
        element: <PagePortofolio />,
      },
      {
        path: ROUTES.CONTACT,
        element: <PageContact />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerList);
