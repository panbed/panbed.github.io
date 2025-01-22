import Matrix from "@/components/Matrix/Matrix";
import Name from "@/components/Name/Name";

export default function PageNotFound() {
  return (
    <div>
      <Matrix backgroundText={["404", "", "", "", "?", "", ""]} />
      <div className="flex flex-col justify-center items-center m-auto h-screen gap-10">
        <Name message="404" />
        {/* <h2 className="lg:text-2xl">Page not found!</h2> */}
      </div>
    </div>
  )
}