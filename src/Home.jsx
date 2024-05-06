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
      <main>
      </main>
    </>
  );
}