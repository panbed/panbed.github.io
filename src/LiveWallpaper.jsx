import { useState, useEffect, useRef } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from './Heading'
import './App.scss'

const Pixel = ({ value }) => {
  return <p>{value}</p>
}

function createGrid(w, h) {
  let grid = [];

  for (let i = 0; i < w; i++) {
    grid[i] = [];
    for (let j = 0; j < h; j++) {
      grid[i][j] = Math.floor(Math.random() * 9);
    }
  }
  console.log("creatig")
  return grid;
}

function modGrid(grid) {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = new Array();
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] <= 0) {
        newGrid[i][j] = Math.floor(Math.random() * 9);
      }
      else {
        newGrid[i][j] = grid[i][j] - 1;
      }
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
  // createGrid(width, height);

  const containerRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((newGrid) => modGrid(newGrid));
    }, 1000)

    // window.addEventListener('resize', updateWindowSize);
    // updateWindowSize();

    containerRef.current.addEventListener('mousemove', (e) => {
      let childDivs = containerRef.current.getElementsByTagName('div');
      for (let i = 0; i < childDivs.length; i++) {
        let rect = childDivs[i].getBoundingClientRect();
        let centeredX = rect.left - e.clientX;
        let centeredY = rect.top - e.clientY;
        let radius = 250;

        let distance = Math.sqrt(Math.pow(centeredX, 2) + Math.pow(centeredY, 2));
        // if ((e.clientY  > rect.top - 10 && e.clientY < rect.bottom + 10) && (e.clientX > rect.left - 10 && e.clientX < rect.right + 10)) {
        if (distance <= radius) {
          childDivs[i].style.transform = `scale(${Math.log10(radius - distance)})`;
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

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    <>
      <div className='pixelGrid' aria-hidden='true' ref={containerRef}>
        {/* {grid.map((gridElement) => (<div>{gridElement}</div>))} */}
        {/* i have no idea how this works but it does somehow */}
        {grid != null && grid[0].map((row, index) => {
          return grid.map((column) => {
            return <div className='pixelItem'>{column[index]}</div>
          });
        })}

      </div>
      {/* <button onClick={() => onMash("dfgdfgdg")}>
          test
      </button> */}
    </>
  );
}