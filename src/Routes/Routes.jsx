import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Roots/Root';
import ErrorPages from '../pages/ErrorPages/ErrorPages';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import SingleApp from '../pages/SingleApp/SingleApp';
import Installation from '../pages/Installation/Installation';
import AppNotFound from '../pages/AppNotFound/AppNotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/apps',
          Component: Apps
        },
        {
          path: '/apps/:id',
          Component: SingleApp,
        },
        {
          path: '/installation',
          Component: Installation,
        },
        {
          path: '/app-not-found',
          Component: AppNotFound,
        },
        {
          path: "*",
          Component: ErrorPages,
        }
    ]
  },
]);