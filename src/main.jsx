import { createRoot } from "react-dom/client"
import { HashRouter, Route, Routes } from "react-router"
import "./index.css"

import Home from "./containers/Home/Home"
import Layout from "./components/Layout/Layout"
import Projects from "./containers/Projects/Projects"
import PageNotFound from "./containers/PageNotFound/PageNotFound"
import About from "./containers/About/About"

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
)
