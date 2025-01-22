import { useState, useEffect } from "react";
import "./Matrix.scss"

export default function Matrix( {backgroundText} ) {
  // Get width and height of window
  const [width, setWidth] = useState(Math.round(window.innerWidth / 48))
  const [height, setHeight] = useState(Math.round(window.innerHeight / 48))

  const [grid, setGrid] = useState(() => createGrid(width, height))

  // TODO: i think there's performance issues when switching rapidly, maybe useCallback these idk
  function createGrid(w, h) {
    let grid = []
  
    for (let i = 0; i < w; i++) {
      grid[i] = []
      for (let j = 0; j < h; j++) {
        grid[i][j] = backgroundText[Math.floor(Math.random() * backgroundText.length)]
      }
    }
  
    return grid
  }
  
  function modGrid(grid) {
    const newGrid = [...grid]
    for (let i = 0; i < grid.length; i++) {
      // newGrid[i] = [new Array()]
      for (let j = 0; j < grid[i].length; j++) {
        if (Math.random() > 0.5) {
          newGrid[i][j] = backgroundText[Math.floor(Math.random() * backgroundText.length)]
        }
      }
    }
    return newGrid
  }
  

  useEffect(() => {
    const mouseClick = window.addEventListener("mousedown", () => {
      setGrid((newGrid) => modGrid(newGrid));
      const elements = [ ...document.querySelectorAll(".pixelItem") ]
      elements.forEach((element) => {
        element.style.animation = ""
      })
    })

    const mouseMovement = window.addEventListener("mousemove", (e) => {
      const elements = [ ...document.querySelectorAll(".pixelItem") ]
      const rects = elements.map(element => element.getBoundingClientRect())

      elements.forEach((element, index) => {
        const rect = rects[index]
        const centeredX = rect.left - e.clientX
        const centeredY = rect.top - e.clientY
        const distance = Math.hypot(centeredX, centeredY)

        if (distance <= 250) {
          const scale = Math.log10(Math.max(distance - 100, 0.1)).toFixed(1)
          element.style.transform = `scale(${scale})`
          // element.style.animation = "hover-animation 1s alternate infinite ease-in-out"
          // element.style.animationDelay = "0s"
        }
        else {
          element.style.transform = `scale(1)`
        }
      })
    })

    const windowResize = window.addEventListener("resize", () => {
      const localWidth = Math.round(window.innerWidth / 32);
      const localHeight = Math.round(window.innerHeight / 32);
      setWidth(localWidth);
      setHeight(localHeight);
  
      setGrid(createGrid(localWidth, localHeight));
    })

    return () => {
      window.removeEventListener("resize", windowResize)
      window.removeEventListener("mousedown", mouseClick)
      window.removeEventListener("mousemove", mouseMovement)
    }
  }, [])



  return (
    <div className="matrix" aria-hidden="true">
      {grid != null && grid[0].map((row, i) => {
        return grid.map((column, j) => {
          return <div key={i + j} id={i + j} className='pixelItem' style={{animationDelay: `-${Math.random() * 10}s`}} aria-hidden='true'>{column[i]}</div>
        })
      })}
    </div>
  )
}