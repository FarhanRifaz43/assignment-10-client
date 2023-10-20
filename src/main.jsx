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
        path: '/product/details/:name',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('http://localhost:4000/products')
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
