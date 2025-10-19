import { Icon } from "@iconify/react"
import "./ProjectWindow.scss"
import { Link } from "react-router"

export default function ProjectWindow({ title, icon, image, body, source, live, footer }) {
  return (
    <div
      className="project-window border-2 rounded-sm w-96 md:h-96  flex flex-col"
      style={{ background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 1)), no-repeat center/200% url(${image})` }}
    >
      <div className="p-5 flex justify-between bg-gradient-to-b from-black">
        <div className="flex gap-3 items-center">
          {icon ? <img src={icon} className="h-5 w-5" /> : <></>}
          <h2 className="font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{title}</h2>
        </div>
        <div className="flex gap-5">
          {source ?
            <Link to={source} target="_blank" rel="noopener noreferrer" aria-label="View source code of project" >
              <Icon icon="pixelarticons:code" className="text-[24px]" aria-hidden="true" />
            </Link>
            : <></>}
          {live ?
            <Link to={live} target="_blank" rel="noopener noreferrer" aria-label="View live version of project" >
              <Icon icon="pixelarticons:play" className="text-[24px]" aria-hidden="true" />
            </Link>
            : <></>}
        </div>
      </div>
      {/* TODO: on mobile the background image doesn't cover the entire box, i don't really want to keep increasing center/x% */}
      <div className="w-full p-5 pt-0 h-full overflow-y-hidden flex flex-col gap-5">
        <article className="flex flex-col h-[17rem] gap-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {body}
        </article>
        <footer className="flex gap-3">
          {footer}
        </footer>
      </div>
    </div>
  )
}