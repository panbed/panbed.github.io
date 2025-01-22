import "./Name.scss"

export default function Name({ message }) {
  const characters = message.split("")
  const classNames = "flex gap-1 scroll-m-20 tracking-tight text-5xl md:text-6xl lg:text-9xl"

  return (
    <h1 aria-label="Bed Pandey">
      <div aria-hidden="true" id="characters-container" className={`${classNames}`}>
        {/* <div id="characters-container-noanim" className={`absolute ${classNames}`}>
          {characters.map((character, index) => (
            <span className="character-noanim" key={`character-${index}-noanim`}>{character}</span>
          ))}
        </div> */}
        {characters.map((character, index) => (
          <span key={`character-${index}`} id={`character-${index}`}>{character}</span>
        ))}
      </div>
    </h1>
  )
}