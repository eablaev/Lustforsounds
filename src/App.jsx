import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/MainPage'
import Studio from './components/Studio'
import Production from './components/Production'
import Rates from './components/Rates'
import ContactPage from './components/ContactPage'
import FAQPage from './components/FAQPage'
import ClientsPage from './components/ClientsPage'
import ErrorPage from './components/ErrorPage';

import './App.css'

function App() {
    // const basename = import.meta.env.MODE === "production" ? "/Lustforsounds" : "/"
    const basename = "/";
    const router = createBrowserRouter([
            {
              path: '/',
              element: <MainPage />,
              errorElement: <ErrorPage />,
            },
            {
              path: '/studio',
              element: <Studio />,
            },
            {
              path: '/production',
              element: <Production />,
            },
            {
              path: '/rates',
              element: <Rates />,
            },
            {
              path: '/contact',
              element: <ContactPage />,
            },
            {
              path: '/faq',
              element: <FAQPage />,
            },
            {
              path: '/clients',
              element: <ClientsPage />,
            },
            
    ], { basename: basename, 
        future: { 
        v7_normalizeFormMethod: true 
    }  } );
      
    return <RouterProvider router={router} />;
}

export default App
