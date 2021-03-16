import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Nav_Bar">
      <Link className="home__link" to="/">
        Home
      </Link>
      <Link clasSName="about__link" to="/about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
