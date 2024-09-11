import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main_Layout from "./Main-Layout/Main_Layout";
import Authentication from "./Componants/Authentication";
import Login from "./Componants/LOGIN_&_SignUp/Login";
import Home from "./Componants/Home";
import Load from "./Componants/Load";
import About from "./Componants/About";
import Contract from "./Componants/Contract";
import Servises from "./Componants/Servises";
import Details from "./Componants/Details/Details";
import Cart from "./Componants/Cart";
import { QueryClient, QueryClientProvider } from 'react-query'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout></Main_Layout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/',
        element: <Load><Home></Home></Load>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contract></Contract>
      },
      {
        path: '/services',
        element: <Servises></Servises>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },

    ]
  },
]);


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />

      </QueryClientProvider>
    </Authentication>

  </React.StrictMode>
);