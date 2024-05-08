import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import About from './About';
import Projects from './Projects';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss'

function App() {
  const [headerTitle, setHeaderTitle] = useState('Placeholder :3');

  useEffect(() => {
    console.log('header updated...');
  }, [headerTitle]);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout title={headerTitle} />}>
          <Route index element={<Home headerTitle={headerTitle} setHeaderTitle={setHeaderTitle}/>}  />  
          <Route path="projects" element={<Projects headerTitle={headerTitle} setHeaderTitle={setHeaderTitle} />} />
          <Route path="about" element={<About headerTitle={headerTitle} setHeaderTitle={setHeaderTitle} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;