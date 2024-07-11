import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar"></div>
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
        <div className="navbar"></div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    )
  );
}

export { Layout, RequireAuthLayout };
