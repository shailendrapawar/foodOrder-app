import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './pages/home/Home.jsx'
import Cart from './pages/cart/Cart.jsx'

const HomePage=React.lazy(()=>import("./pages/home/Home.jsx"))
const CartPage=React.lazy(()=>import("./pages/cart/Cart.jsx"))

import { myStore } from "./store/store.js"
import { Provider } from 'react-redux'


const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={myRouter}>

      </RouterProvider>

    </Provider>
  </StrictMode>
)
