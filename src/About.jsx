import { useEffect, useState } from 'react'
import Heading from './Heading';
import './App.scss'

export default function About({ headerTitle, setHeaderTitle}) {

  useEffect(() => {
    setHeaderTitle("/about");
  }, []);

  return (
    <>
      <main className='about'>
        <aside>
          <img src='img/me.jpg' width={250} alt='Bed Pandey'/>
        </aside>
        <article>
          <p>Hi! I'm Bed Pandey (yes, that's my real name).</p>
          <p>I'm currently a student at the University of Central Florida studying Computer Science.</p>
          <p>I also work as a <a href='https://techrangers.cdl.ucf.edu/'>Techranger</a> for UCF's CDL team!</p>

          <p>Some of my hobbies include:</p>
          <ul>
            <li>Making music
              <ul>
                <li>Some of my favorite apps to make music with are <a href='https://www.beepbox.co'>Beepbox</a> and <a href='https://auxy.co/'>Auxy</a></li>
              </ul>
            </li>
            <li>Video games
              <ul>
                <li>One of my favorite games is Okami!</li>
              </ul>
            </li>
            <li>
              Sleeping (it's in the name!)
            </li>
          </ul>
        </article>


      </main>
    </>
  );
}