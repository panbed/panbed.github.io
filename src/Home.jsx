import { useEffect, useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from './Heading'
import './App.scss'

export default function Home( {headerTitle, setHeaderTitle } ) {

  useEffect(() => {
    setHeaderTitle("/home");
  }, []);

  return (
    <>
      <main className='home'>
        <figure>
          <img src='https://avatars.githubusercontent.com/u/106042766?v=4' width={250} alt='Profile picture from GitHub'/>
          <figcaption>Bed Pandey</figcaption>
        </figure>
        
        {/* <h1>Bed Pandey</h1> */}
        <h2>Student at the University of Central Florida</h2>
        <ul className='links'>
          <li><a href='https://github.com/panbed'><ion-icon name="logo-github"></ion-icon>GitHub</a></li>
          <li><a href='https://www.linkedin.com/in/bed-pandey/'><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</a></li>
          <li><a href='https://www.linkedin.com/in/bed-pandey/'><ion-icon name="document-text"></ion-icon>Resume</a></li>
          {/* <li>test</li> */}
        </ul>
      </main>
    </>
  );
}