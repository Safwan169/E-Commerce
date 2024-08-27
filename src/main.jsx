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
import Load from "./Load";
import About from "./About";
import Contract from "./Componants/Contract";
import Servises from "./Componants/Servises";
import Details from "./Componants/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout></Main_Layout>,
    children:[
    {  path:'login',
      element:<Login></Login>
    },
    {  path:'/',
      element:<Load><Home></Home></Load>
    },
    {  path:'/about',
      element:<About></About>
    },
    {  path:'/contact',
      element:<Contract></Contract>
    },
    {  path:'/services',
      element:<Servises></Servises>
    },
    {  path:'/details/:id',
      loader:({params})=>fetch(`https://e-commerce-server-side-beta.vercel.app/details/${params.id}`),
      element:<Details></Details>
    },
   
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
    <RouterProvider router={router} />

    </Authentication>
  </React.StrictMode>
);