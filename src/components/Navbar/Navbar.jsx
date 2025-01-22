import { Icon } from "@iconify/react"
import "./Navbar.scss"
import { Link, useLocation } from "react-router"

const navigation = [
  {
    title: "Home",
    icon: "pixelarticons:home",
    link: "/",
  },
  {
    title: "Projects",
    icon: "pixelarticons:file-multiple",
    link: "/projects",
  },
  {
    title: "About",
    icon: "pixelarticons:user",
    link: "/about",
  },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header>
      <nav className="fixed top-0 flex w-full items-center justify-between py-5 text-xl h-16 nav-style">
        <div className="flex w-full items-center justify-between px-5">
          <div className="flex gap-2 items-center font-bold">
            <h1 className="logo font-thin text-2xl text-ellipsis text-nowrap overflow-hidden w-[10ch]">{location.pathname != "/" ? location.pathname : ""}</h1>
          </div>

          <ul className="flex items-center gap-8">
            {navigation.map((page, index) => (
              <li key={index}>
                <Link to={page.link} className="">
                  <Icon icon={page.icon} className="text-[24px] navigation-icons"/>
                  <p className="text-sm">{page.title.toLowerCase()}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}