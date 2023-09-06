import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Add from "./pages/add/Add.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Project from "./pages/project/Project.jsx";
import Auth from "./components/auth/Auth.jsx";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.scss";

function App() {
  const [authActive, setAuthActive] = useState(false);

  const Layout = () => {
    return (
      <>
        <div className="app">
          <Auth authActive={authActive} setAuthActive={setAuthActive} />
          <Navbar setAuthActive={setAuthActive} />
          <Outlet />
          <Footer />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/create",
          element: <Add />
        },
        {
          path: "/project/:id",
          element: <Project />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
