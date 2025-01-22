import Matrix from "@/components/Matrix/Matrix"
import "./About.scss"

const backgroundText = ['.']
const h2Style = "text-xl font-bold"

// TODO: Page looks a little weird when in landscape mode on mobile

export default function About() {

  return (
    <div>
      <Matrix backgroundText={backgroundText} />
      <div className="flex flex-col md:flex-row justify-center md:h-screen items-center pt-20 pl-10 pr-10 pb-10 link-underline list-style gap-10">
        
        <div className="flex justify-center">
          <div className="pixel-corners-img-wrapper">
            <img className="pixel-corners-img" src="/img/me.jpg" alt="A picture of me, Bed Pandey."/>
          </div>
        </div>

        <div className="flex flex-col gap-10 ">
          <div className="text-left">
            <h2 className={h2Style}>Who Am I?</h2>
            <p>Hi! I'm <em>Bed Pandey</em> (yes, that's my real name!)</p>
            <p>I'm currently a student at the University of Central Florida studying computer science.</p>
            <p>I also work as a <a href="https://techrangers.cdl.ucf.edu/">Techranger</a> for the Center of Distributed Learning at UCF!</p>
          </div>

          <div className="text-left">
            <h2 className={h2Style}>What Do I Do?</h2>
            <p>Currently, I'm pretty focused on both school and work. But on the off chance I do have some free time, I might be:</p>
            <ul>
              <li>
                Making music
                <ul>
                  <li>I especially like playing around with apps like <a href="https://www.beepbox.co/">Auxy</a> and <a href="https://www.beepbox.co/">Beepbox</a>. One day I might actually learn how to use a full DAW!</li>
                </ul>
              </li>

              <li>
                Playing video games
                <ul>
                  <li>One of my favorite games of all time is Okami! It's a beautiful game and you should play it :D</li>
                  <li>I also like sandbox games too, like BeamNG.drive. It's pretty fun with a wheel!</li>
                </ul>
              </li>

              <li>
                Tinkering
                <ul>
                  <li>I'm still learning, but messing around with Arduinos and Raspberry Pis is fun. Maybe I should've studied embedded :-)</li>
                </ul>
              </li>
            </ul>
            
            <br />
            <p>I'm also currently the president of <a href="https://wikiknights.com/">Wiki Knights</a>, a student organization at UCF dedicated to promoting open educational resources (OER).</p>
          </div>

          <div className="text-left">
            <h2 className={h2Style}>How Do I Contact You?</h2>
            {/* NOTE: Do I really need this email obfuscation stuff... */}
            <p>You can contact me at <a href="mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#98;&#101;&#100;&#112;&#46;&#100;&#101;&#118;" rel="nofollow noopener noreferrer">&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#98;&#101;&#100;&#112;&#46;&#100;&#101;&#118;</a>, or also on LinkedIn. I prefer email, however!</p>

          </div>

        </div>
      </div>
    </div>
  )
}