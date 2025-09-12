import { FileUser, Github, Linkedin } from "lucide-react"
import "./QuickLinks.scss"
import { Link } from "react-router"

const linkClassName = "flex flex-col items-center gap-1"
const iconClassName = "h-10 w-10 md:h-12 md:w-12 p-2 md:p-2 pixel-corners"

export default function QuickLinks({className}) {

  return (
    <div className={className}>
      <ul id="quick-links" className="flex gap-7 md:gap-10 text-sm">
        <li>
          <Link className={linkClassName} to="https://github.com/panbed" target="_blank">
            <Github aria-hidden="true" className={iconClassName} strokeWidth={1.5}/> 
            <p>GitHub</p>
          </Link>
        </li>
        <li>
          <Link className={linkClassName} to="https://bedp.dev/files/Bed_Pandey_Resume.pdf" target="_blank">
            <FileUser aria-hidden="true" className={iconClassName} strokeWidth={1.5}/>
            <p>Resume</p>
          </Link>
        </li>
        <li>
          <Link className={linkClassName} to="https://www.linkedin.com/in/bed-pandey" target="_blank">
            <Linkedin aria-hidden="true" className={iconClassName} strokeWidth={1.5}/>
            <p>LinkedIn</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
