import { Outlet, Link } from "react-router-dom";

import LiveWallpaper from './LiveWallpaper';
import Heading from "./Heading";

import './App.scss'

export default function Layout({ title }) {
  // const [myState, setMyState] = useState("unset")
  return (
    <>
      {/* <LiveWallpaper onMash={(myVar) => {setMyState(myVar)}}/> */}
      <LiveWallpaper />
      <nav className="navigation">
        <ul className="pageLinks">
          <li>
            <Link to="/">Home</Link>
          </li>          
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <ul className="socialLinks">
          <li>
            <a href="https://www.linkedin.com/in/bed-pandey/" aria-label='My LinkedIn' target='_blank'><ion-icon name="logo-linkedin" aria-hidden='true'/></a>
          </li>
          <li>
            <a href="https://github.com/panbed" aria-label='My GitHub' target='_blank'><ion-icon name="logo-github" aria-hidden='true'/></a>
          </li>
        </ul>
      </nav> 

      <Heading title={title}/>

      <div className="outlet">
        <Outlet />
      </div>
      
    </>
  );
}