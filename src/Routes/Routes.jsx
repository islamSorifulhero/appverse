import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Roots/Root';
import ErrorPages from '../pages/ErrorPages/ErrorPages';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import SingleApp from '../pages/SingleApp/SingleApp';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
          path: '/Apps',
          Component: Apps
        },
        {
          path: '/Apps/:id',
          Component: SingleApp,
        }
    ]
  },
]);