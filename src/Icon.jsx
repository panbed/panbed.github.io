// import { useState } from 'react'

import './App.scss'

export default function Icon( {project, onClick} ) {
  // get children thats in window from props
  return (
    <>
      <li>
        <button onClick={onClick}>
          <img src={project.icon} alt='' /> {project.title}
        </button>
      </li>
    </>
  );
}