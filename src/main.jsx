import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import {  HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-[580px] md:max-w-3xl lg:max-w-6xl mx-auto'>
        <RouterProvider router={Router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
