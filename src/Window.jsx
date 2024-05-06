// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet } from "react-router-dom"

import Heading from './Heading'
import './App.scss'

export default function Window( {children, classStyle} ) {
  // get children thats in window from props
  // const { children } = props;
  return (
    <>
      {/* todo: maybe use semantic tags to describe the window? */}
      <div className={classStyle}>
        {children}
      </div>
    </>
  );
}