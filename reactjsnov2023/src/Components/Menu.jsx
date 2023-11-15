import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper purple">
          <Link href="#" className="brand-logo">
            K O E N I G
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
