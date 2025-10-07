import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Roots/Root';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);