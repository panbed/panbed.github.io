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
      <div className='windowContent'>
        <div className='windowLeft'>
          <h2>prgrid</h2>
          <h3>A simple oscillator sound grid written in Javascript</h3>
          {/* semantic tags here too probably */}

          {/* <p>prgrid is a simple oscillator sound grid written in Javascript.</p> */}
          <p>The top of the grid is your song banks - think of them like "tabs"</p>
          <p>The left of the grid are the layers you can use per song bank</p>
        </div>
        <div className='windowRight'>
          {/* <h2>Screenshots</h2> */}
          <aside>
            <img src='https://raw.githubusercontent.com/panbed/prgrid/main/prgrid.png' width={450} alt='Screenshot of the main prgrid interface' />
            <ul>
              <li><a href='https://bedp.dev/prgrid' aria-label='prgrid site'><ion-icon name="play-circle" aria-hidden='true'></ion-icon></a></li>
              <li><a href='https://github.com/panbed/prgrid' aria-label='prgrid source code'><ion-icon name="code-slash" aria-hidden='true'></ion-icon></a></li>
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
      <div className='windowContent'>
        <div className='windowLeft'>
          <h2>fxdownloader</h2>
          <h3>A frontend for the yt-dlp project written in Java.</h3>
          {/* semantic tags here too probably */}
          <a href='https://github.com/yt-dlp/yt-dlp'>Visit the yt-dlp project.</a>

          <p>fxdownloader is a small Java/JavaFX frontend for yt-dlp.</p>
          <p>It allows for easy downloading of YouTube videos in a variety of output formats (including mp3, wav, ogg, etc.)</p>
        </div>
        <div className='windowRight'>
          <aside>
            <img src='https://raw.githubusercontent.com/panbed/fxdownloader/master/src/main/resources/images/screenshot.png' width={450} alt='Screenshot of fxdownloader interface.' />
            <ul>
              <li><a href='https://github.com/panbed/fxdownloader' aria-label='fxdownloader source code'><ion-icon name="code-slash" aria-hidden='true'></ion-icon></a></li>
            </ul>
          </aside>
          
        </div>
      </div>
    )
  },

  {
    title: 'graphical-goes',
    icon: 'https://raw.githubusercontent.com/ianjustiz/graphical-goes/main/sample_img.png',
    content: (
      <>
        <div className='windowContent'>
          <div className='windowLeft'>
            <h2>graphical-goes</h2>
            <h3>GOES data renderer and web frontend</h3>
            {/* semantic tags here too probably */}
            <p>Collaboration between my friend Ian and I for SwampHacks IX.</p>
            <p></p>
          </div>
          <div className='windowRight'>
            <aside>
              <img src='https://raw.githubusercontent.com/ianjustiz/graphical-goes/main/sample_img.png' width={450} alt='Rendered image of Earth from GOES satellite.' />
              <ul>
                <li><a href='https://github.com/ianjustiz/graphical-goes' aria-label='graphical-goes source code'><ion-icon name="code-slash" aria-hidden='true'></ion-icon></a></li>
              </ul>
            </aside>
            
          </div>
        </div>
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
        <div aria-hidden='true' className='titlebar' ><p>user@site {headerTitle} $ cat {project.title}.txt</p></div>
        {project.content}
        {/* <div className='toolbar'><p>^X exit</p></div> */}
      </Window>
    </>
  );
}