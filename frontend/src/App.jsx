import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuthLayout } from "./routes/layout/layout";
import ProfilePage from "./routes/profile/profilePage";
import HomePage from "./routes/home/homePage";
import LoginPage from "./routes/login/loginPage";
import ProfilePageUpdate from "./routes/profileUpdate/profilePageUpdate";
import AddNewPost from "./routes/posts/addNewPost";
import DetailPostPage from "./routes/posts/detailPost";

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
          path: "/post/:id",
          element: <DetailPostPage />,
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
        {
          path: "/post/add",
          element: <AddNewPost />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
