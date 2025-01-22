import ProjectWindow from "@/components/ProjectWindow/ProjectWindow";

const projects = [
  {
    title: "prgrid",
    icon: "https://raw.githubusercontent.com/panbed/prgrid/main/img/favicon.ico",
    image: "https://raw.githubusercontent.com/panbed/prgrid/main/prgrid.png",
    body: (
      <>
        <p>A simple oscillator sound grid written in Javascript.</p>
        <p>The top of the grid is your song banks - think of them like &quot;tabs&quot;</p>
        <p>The left of the grid are the layers you can use per song bank.</p>
      </>
    ),
    source: "https://github.com/panbed/prgrid",
    live: "https://bedp.dev/prgrid",
    footer: (
      <>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-jquery-plain"></i>
      </>
    )
  },
  {
    title: "Overcastly",
    icon: "https://raw.githubusercontent.com/Overcastly/frontend/refs/heads/main/public/logo_light_min.png",
    image: "https://raw.githubusercontent.com/Overcastly/frontend/refs/heads/main/public/smaller_goes.jpg",
    body: (
      <>
        <p>{"Social media app focused on weather and storm tracking. Main features include a map view displaying post locations and radar layers from NOAA, social media features and a dashboard displaying weather information for your location."}</p>
        <p>{"Uses the MERN stack. I mainly worked on the frontend, as well as some of the APIs, and set up DigitalOcean hosting."}</p>
      </>
    ),
    source: "https://github.com/orgs/Overcastly/repositories",
    footer: (
      <>
        <i className="devicon-typescript-plain"></i>
        <i className="devicon-react-original"></i>
        <i className="devicon-tailwindcss-original"></i>
        <i className="devicon-express-original"></i>
        <i className="devicon-mongodb-plain"></i>
        <i className="devicon-digitalocean-original"></i>
        <i className="devicon-linux-plain"></i>
      </>
    )
  },
  {
    title: "fxdownloader",
    icon: "https://raw.githubusercontent.com/panbed/fxdownloader/master/src/main/resources/images/default.png",
    image: "https://raw.githubusercontent.com/panbed/fxdownloader/master/src/main/resources/images/screenshot.png",
    body: (
      <>
        <p>A frontend for the <a target="_blank" href='https://github.com/yt-dlp/yt-dlp'>yt-dlp project</a> written in Java.</p>
        <p>It allows for easy downloading of YouTube videos in a variety of output formats (including mp3, wav, ogg, etc.)</p>
      </>
    ),
    source: "https://github.com/panbed/fxdownloader",
    footer: (
      <>
        <i className="devicon-java-plain"></i>
    </>
    )
  },
  {
    title: "graphical-goes",
    icon: "https://raw.githubusercontent.com/ianjustiz/graphical-goes/main/sample_img.png",
    image: "https://raw.githubusercontent.com/ianjustiz/graphical-goes/main/sample_img.png",
    body: (
      <>
        <p>GOES data renderer and web frontend.</p>
        <p>Collaboration between my friend Ian and I for SwampHacks IX.</p>
        <p>Fetches raw data files from NOAA satellites, compiles them into images, and displays them on a website.</p>
      </>
    ),
    source: "https://github.com/ianjustiz/graphical-goes",
    footer: (
      <>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-jquery-plain"></i>
        <i className="devicon-python-plain"></i>
      </>
    )
  },
  {
    title: "Contact Manager",
    icon: "https://raw.githubusercontent.com/panbed/contact-manager/refs/heads/master/html/images/default.png",
    image: "https://raw.githubusercontent.com/panbed/contact-manager/refs/heads/master/screenshot.png",
    body: (
      <>
        <p>Simple, but elegant contact manager meant to test our LAMP-stack abilities as well as team dynamics.</p>
        <p>I worked mainly on the frontend as well as acting as the project manager for the group. Also helped with creating some endpoints for the backend and setting up the database, as well as containerizing the entire project with Docker.</p>
      </>
    ),
    source: "https://github.com/panbed/contact-manager",
    footer: (
      <>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-jquery-plain"></i>
        <i className="devicon-php-plain"></i>
        <i className="devicon-bootstrap-plain"></i>
        <i className="devicon-linux-plain"></i>
        <i className="devicon-mysql-plain"></i>
        <i className="devicon-docker-plain"></i>
      </>
    )
  },
]

export default function Projects() {
  return (
    <>
      <div className="mt-16 p-5">
        
        {/* TODO: i want to center this but for some reason when i add h-[calc(100vh-8rem)] it messes up the spacing on mobile */}
        {/* TODO: also maybe come up with a cool background image thing for the projects page */}
        <div className="flex flex-wrap gap-5 justify-center items-center link-underline">
          {projects.map((project, index) => (
            <ProjectWindow key={index}
              title={project.title}
              icon={project.icon}
              image={project.image}
              body={project.body}
              source={project.source}
              live={project.live}
              footer={project.footer}
            />
          ))}
        </div>
      </div>
    </>
  )
}