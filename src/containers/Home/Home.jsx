import Name from "@/components/Name/Name"
import "./Home.scss"
import Matrix from "@/components/Matrix/Matrix"
import QuickLinks from "@/components/QuickLinks/QuickLinks"
// import Dialog from "@/components/Dialog/Dialog"

const backgroundText = ['$', '#', '/', '%', '^', '&', '*', '(', ')', '+', '=', '{', '}', '\\', '?']

export default function Home() {
  
  return (
    <div>
      <Matrix backgroundText={backgroundText} />
      <div className="flex flex-col justify-center h-screen m-auto items-center gap-10">
        <Name message="bedpandey"/>
        <p className="w-1/2 text-center text-sm md:text-base link-underline">compsci student at ucf, web dev for <a href="https://github.com/ucfcdl" target="_blank">@ucfcdl</a></p>
        <QuickLinks />
      </div>
    </div>
  )
}