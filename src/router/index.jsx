import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../component/content/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
           
        ]
    }
])