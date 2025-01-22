import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  )
}