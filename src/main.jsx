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
import Register from "./Componants/LOGIN_&_SignUp/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout></Main_Layout>,
    children:[
    {  path:'login',
      element:<Login></Login>
    },
    {  path:'register',
      element:<Register></Register>
    }
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