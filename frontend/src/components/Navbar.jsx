import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThLarge } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="inner">
          <div className="brand">
            <Link href="/">
              <span>SimplySpaces</span>
            </Link>
            <button
              className="button button--link toggler"
              type="button"
              onClick={handleClick}
            >
              <TiThLarge size={24} color="red" />
            </button>
          </div>
          <div className={`${isOpen ? "menu active" : "menu"}`}>
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
    </div>
  );
};

export default Navbar;
