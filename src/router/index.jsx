import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../component/content/Home";
import About from "../component/content/About";
import Gallery from "../component/content/Gallery";
import ContactUs from "../component/content/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "gallery",
                element: <Gallery/>
            },
            {
                path: "contactus",
                element: <ContactUs/>
            },
        ]
    }
])