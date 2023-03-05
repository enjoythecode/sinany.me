import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Portfolio from './Portfolio';
import Art from './Art';
import Blog, { blogPostLoader } from './blog/Blog.js';

import './index.css';

/*  
  Router modeled after example provided in the react-router repo:
  https://github.com/remix-run/react-router/tree/dev/examples/data-router
*/
const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/blog/:id" element={<Blog />} loader={ blogPostLoader }/>
    <Route path="/art" element={<Art />} />
    <Route path="/" element={<Portfolio />} />
  </Route>
));


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
