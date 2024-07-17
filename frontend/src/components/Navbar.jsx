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
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/listing">Listing</Link>
              </li>
              <li>
                <Link href="/agents">Agents</Link>
              </li>
            </ul>
          </nav>
          <div className="actions">
            <Link href="/auth/login">Sign in</Link>
            <Link className="button button--primary" href="/auth/register">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
