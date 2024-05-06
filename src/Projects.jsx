import { useState, useEffect } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from './Heading';
import Window from './Window';
import Icon from './Icon';

import './App.scss'


const projects = [
  {
    title: 'prgrid',
    icon: 'https://raw.githubusercontent.com/panbed/prgrid/main/img/favicon.ico',
    content: (
      <div className='prgrid'>
        <div className='prgridleft'>
          <h1>prgrid</h1>
          <h2>A simple oscillator sound grid written in Javascript</h2>
          {/* semantic tags here too probably */}

          {/* <p>prgrid is a simple oscillator sound grid written in Javascript.</p> */}
          <p>The top of the grid is your song banks - think of them like "tabs"</p>
          <p>The left of the grid are the layers you can use per song bank</p>
        </div>
        <div className='prgridright'>
          {/* <h2>Screenshots</h2> */}
          <aside>
            <img src='https://raw.githubusercontent.com/panbed/prgrid/main/prgrid.png' width={450} alt='Screenshot of the main prgrid interface' />
            <ul>
              <li><a href='https://bedp.dev/prgrid'><ion-icon name="play-circle"></ion-icon></a></li>
              <li><a href='https://github.com/panbed/prgrid'><ion-icon name="code-slash"></ion-icon></a></li>
            </ul>
            </aside>
          
        </div>
      </div>
      
      
    )
  },

  {
    title: 'fxdownloader',
    icon: 'https://raw.githubusercontent.com/panbed/fxdownloader/master/src/main/resources/images/default.png',
    content: (
      <>
      <h1>fxdownloader</h1>
      <p>fxdownloader is a ...</p>
      </>
    )
  },

  {
    title: 'graphical-goes',
    icon: 'https://raw.githubusercontent.com/ianjustiz/graphical-goes/main/sample_img.png',
    content: (
      <>
      <img src='public/vite.svg' alt='test image'/>
      <h1>graphical-goes</h1>
      <p>testing...</p>
      </>
    )
  }
]

export default function Projects({ headerTitle, setHeaderTitle }) {

  // set header title after clicking on route
  useEffect(() => {
    setHeaderTitle("/projects");
  }, []);

  const [project, setProject] = useState(projects[0]);
  // const [windowContent, setWindowContent] = useState(projects[0].content);

  return (
    <>
      <div className='icons'>
        <ul>
          <Icon project={projects[0]} onClick={() => setProject(projects[0])}/>
          <Icon project={projects[1]} onClick={() => setProject(projects[1])} />
          <Icon project={projects[2]} onClick={() => setProject(projects[2])}/>
        </ul>
      </div>
      <Window classStyle='projectWindow'>
        <div className='titlebar'><p>user@site {headerTitle} $ cat {project.title}.txt</p></div>
        {project.content}
      </Window>
    </>
  );
}