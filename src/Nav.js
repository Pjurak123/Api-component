import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <li className="nav-link">Press to get an API data</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
