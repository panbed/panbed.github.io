import "./Dialog.scss"

export default function Dialog({ title, message }) {

  // TODO: Finish up the dialog box component. Not sure if I need it.

  return (
    <div className="dialog-box absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 bg-black">
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl text-ellipsis text-nowrap overflow-hidden flex-1 bg-white text-black p-5">{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  )
}