import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import About from './components/About/About';
import BookDetails from './components/BookDetails/BookDetails';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'loder',
        element: <LoadingSpinner></LoadingSpinner>
      }
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
