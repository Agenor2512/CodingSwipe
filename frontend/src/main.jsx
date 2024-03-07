import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import UsersHomePage from "./pages/UsersHomePage";
import ErrorPage from "./pages/ErrorPage";
import { RegisterProvider } from "./context/RegisterContext";

import HomePageUserNav from "./components/HomePageUserNav";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/usersHomePage",
        element: <UsersHomePage />,
      },
      {
        path: "/homePageUserNav",
        element: <HomePageUserNav />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RegisterProvider>
      <RouterProvider router={router} />
    </RegisterProvider>
  </React.StrictMode>
);
