import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Home from './pages/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App />}> 
    <Route index={true} path = '/' element = {<Home />} /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
