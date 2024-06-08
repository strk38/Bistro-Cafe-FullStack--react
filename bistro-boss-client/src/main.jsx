import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './errorPage/error-page';
import Home from './components/pages/home/home';
import Menu from './components/pages/Menu/menu';
import { HelmetProvider } from 'react-helmet-async';
import Order from './components/pages/Order/order';
import Contact from './components/pages/Contact/contact';
import SignUp from './components/shared/signUP';
import Login from './components/shared/login';
import AuthProvider from './providers/authProvider';
import PrivateRoute from './routes/privateRoute';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard';
import Cart from './components/pages/Dashboard/Cart/Cart';
import AllUsers from './components/pages/Dashboard/AllUsers/AllUsers';
import AddItems from './components/pages/Dashboard/AddItems/AddItems';
import AdminRoute from './routes/AdminRoute';
import ManageItems from './components/pages/Dashboard/Manageitems/ManageItems';
import UpdateItem from './components/pages/Dashboard/UpdateItem/UpdateItem';
import { url_link } from './routes/url';
import Payment from './components/pages/Dashboard/Payment/Payment';
import PaymentHistory from './components/pages/Dashboard/PaymentHistory/PaymentHistory';
import UserHome from './components/pages/Dashboard/UserHome/UserHome';
import AdminHome from './components/pages/Dashboard/AdminHome/AdminHome';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      //user priviledge
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },

      //admin priviledge
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: "users",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path: "addItems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>,
      },
      {
        path: "manageitems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
      },
      {
        path: "updateitem/:id",
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`${url_link}/menu/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
