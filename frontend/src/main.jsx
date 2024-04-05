import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterProvider } from "./context/RegisterContext";
import { LoginUserProvider } from "./context/LoginUserContext";
import App from "./App";

import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import UsersHomePage from "./pages/UsersHomePage";
import ErrorPage from "./pages/ErrorPage";
import HomePageSwipe from "./pages/HomePageSwipe";

import ModalDisconnection from "./components/ModalDisconnection";
import HomePageMessages from "./pages/HomePageMessages";

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
        path: "/homePageSwipe",
        element: <HomePageSwipe />,
      },
      {
        path: "/homePageMessages",
        element: <HomePageMessages />,
      },
      {
        path: "/modalDisconnection",
        element: <ModalDisconnection />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RegisterProvider>
      <LoginUserProvider>
        <RouterProvider router={router} />
      </LoginUserProvider>
    </RegisterProvider>
  </React.StrictMode>
);
