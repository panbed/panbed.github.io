import { useState, useEffect, useRef } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from './Heading'
import './App.scss'

const Pixel = ({ value }) => {
  return <p>{value}</p>
}

const backgroundText = ['$', '#', '/', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '\\', '?'];
function createGrid(w, h) {
  let grid = [];

  for (let i = 0; i < w; i++) {
    grid[i] = [];
    for (let j = 0; j < h; j++) {
      grid[i][j] = backgroundText[Math.floor(Math.random() * backgroundText.length)]
    }
  }
  // console.log("creatig");
  return grid;
}

function modGrid(grid) {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = new Array();
    for (let j = 0; j < grid[i].length; j++) {
      // if (grid[i][j] <= 0) {
      //   newGrid[i][j] = Math.floor(Math.random() * 9);
      // }
      // else {
      //   newGrid[i][j] = grid[i][j] - 1;
      // }
      newGrid[i][j] = backgroundText[Math.floor(Math.random() * backgroundText.length)]
    }
  }
  return newGrid;
}

// pass in onMash
export default function LiveWallpaper() {
  // const [count, setCount] = useState(0)

  // get width and height of window
  const [width, setWidth] = useState(Math.round(window.innerWidth / 32));
  const [height, setHeight] = useState(Math.round(window.innerHeight / 32));

  const [grid, setGrid] = useState(() => createGrid(width, height));
  const [divs, setDivs] = useState(() => gridDivCreator(grid));
  // createGrid(width, height);

  const containerRef = useRef(null);

  useEffect(() => {
    // console.log('loading...')
    const interval = setInterval(() => {
      setGrid((newGrid) => modGrid(newGrid));
      // setDivs((newDivs) => gridDivCreator((grid) => grid));
    }, 1000)

    // window.addEventListener('resize', updateWindowSize);
    // updateWindowSize();

    

    window.addEventListener('mousemove', (e) => {
      let childDivs = containerRef.current.getElementsByTagName('div');
      for (let i = 0; i < childDivs.length; i++) {
        let rect = childDivs[i].getBoundingClientRect();
        let centeredX = rect.left - e.clientX;
        let centeredY = rect.top - e.clientY;
        let radius = 250;
        let distance = Math.hypot(centeredX, centeredY);
        // if ((e.clientY  > rect.top - 10 && e.clientY < rect.bottom + 10) && (e.clientX > rect.left - 10 && e.clientX < rect.right + 10)) {
        
        if (distance <= radius) {
          childDivs[i].style.transform = `scale(${Math.log10(distance - 100)})`;
          // childDivs[i].style.transform = `scale(${Math.log10(distance)})`;
        }
        else {
          childDivs[i].style.transform = `scale(1)`;
        }
      }
    });

    return () => {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const localWidth = Math.round(window.innerWidth / 32);
    const localHeight = Math.round(window.innerHeight / 32);
    setWidth(localWidth);
    setHeight(localHeight);
    // setGrid(createGrid(width, height));
    setGrid(createGrid(localWidth, localHeight));

  }, [window.innerHeight, window.innerWidth]);

  function gridDivCreator(grid) {
    let divs = [];
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        divs.push(<div id={counter++} className='pixelItem' onClick={() => nexus(grid, counter)}>{grid[i][j]}</div>)
        // counter++;
        // console.log(counter);
      }
    }

    return divs;
  }

  useEffect(() => {
    
  }, [grid]);

  function nexus(grid, id) {
    // let childDivs = containerRef.current.getElementsByTagName('div');
    // for (let i = 0; i < childDivs.length; i++) {
    
    // }

    // console.log(id);
  }

  return (
    <>
      <div className='pixelGrid' aria-hidden='true' ref={containerRef}>
        {/* {grid.map((gridElement) => (<div>{gridElement}</div>))} */}
        {/* i have no idea how this works but it does somehow */}

        {grid != null && grid[0].map((row, i) => {

          return grid.map((column, j) => {
            return <div id={i + j} className='pixelItem' aria-hidden='true'>{column[i]}</div>
          });
        })}

        {/* {divs.map((div, i) => {return div})} */}

      </div>
      {/* <button onClick={() => onMash("dfgdfgdg")}>
          test
      </button> */}
    </>
  );
}