import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuthLayout } from "./routes/layout/layout";
import ProfilePage from "./routes/profile/profilePage";
import HomePage from "./routes/home/homePage";
import LoginPage from "./routes/login/loginPage";
import ProfilePageUpdate from "./routes/profileUpdate/profilePageUpdate";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuthLayout />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfilePageUpdate />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
