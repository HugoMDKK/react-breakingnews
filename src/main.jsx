import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/* import "./GlobalStyled.jsx"; */
import App from "./App.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/home.jsx";
import { Search } from "./Pages/Search/Search.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyled } from "./GlobalStyled.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import { Authentication } from "./Pages/Authentication/Authentication.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication />,
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </StrictMode>
);
