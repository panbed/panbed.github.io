// import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

import './App.scss'

export default function Layout() {
  return (
    <>
      <nav className="navigation">
        <ul className="pageLinks">
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>          
        </ul>

        <ul className="socialLinks">
          {/* todo: add link text for accessibility */}
          <a href="https://www.linkedin.com/in/bed-pandey/"><ion-icon name="logo-linkedin" /></a>
          <a href="https://github.com/panbed"><ion-icon name="logo-github" /></a>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}