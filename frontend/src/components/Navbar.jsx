import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="inner">
          <div className="brand">
            <Link href="/">
              <span>SimplySpaces</span>
            </Link>
          </div>
          <nav className="list">
            <ul role="list">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/posts">Listing</Link>
              </li>
              <li>
                <Link to="/agents">Agents</Link>
              </li>
            </ul>
          </nav>
          <div className="actions">
            <Link to="/auth/login">Sign in</Link>
            <Link className="button button--primary" to="/auth/register">
              Join
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
