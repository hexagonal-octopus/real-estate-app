import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuthLayout() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    currentUser && (
      <div className="layout">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    )
  );
}

export { Layout, RequireAuthLayout };
