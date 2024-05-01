// import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

import LiveWallpaper from './LiveWallpaper';

import './App.scss'
import { useState } from "react";

export default function Layout() {
  // const [myState, setMyState] = useState("unset")
  return (
    <>
      {/* <LiveWallpaper onMash={(myVar) => {setMyState(myVar)}}/> */}
      <LiveWallpaper />
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
          {/* todo: add link text for accessibility but hide normally somehow*/}
          <li>
            <a href="https://www.linkedin.com/in/bed-pandey/"><ion-icon name="logo-linkedin" /></a>
          </li>
          <li>
            <a href="https://github.com/panbed"><ion-icon name="logo-github" /></a>
          </li>
          
        </ul>
      </nav> 
      <Outlet />
    </>
  );
}