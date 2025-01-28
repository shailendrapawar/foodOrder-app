import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from '../Layout.jsx'
import Home from './pages/home/Home.jsx'
import Cart from './pages/cart/Cart.jsx'


const myRouter=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={myRouter}>

    </RouterProvider>
  </StrictMode>,
)
