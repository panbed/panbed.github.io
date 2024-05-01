// import { useState } from 'react'
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Projects from './Projects';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss'

function App() {
  console.log("BRUH");
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;