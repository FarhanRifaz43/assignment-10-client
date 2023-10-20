import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from './firebase/AuthProvider'
import Root from './components/Root'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AddProduct from './components/AddProduct'
import PrivateRoute from './components/PrivateRoute'
import Products from './components/Products'
import Details from './components/Details'
import Cart from './components/Cart'
import AllProducts from './components/AllProducts'
import UpdateProduct from './components/UpdateProduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('brands.json')
      },
      {
        path: '/add',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/product/:name',
        element: <Products></Products>,
        loader: () => fetch('http://localhost:4000/products')
      },
      {
        path: '/product/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:4000/products/${params.id}`)
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('http://localhost:4000/products')
      },
      {
        path: '/all',
        element: <AllProducts></AllProducts>,
        loader: () => fetch('http://localhost:4000/products')
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:4000/products/${params.id}`)
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
