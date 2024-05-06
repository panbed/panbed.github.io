import { useEffect, useState } from 'react'
import Heading from './Heading';
import './App.scss'

export default function About({ headerTitle, setHeaderTitle}) {

  useEffect(() => {
    setHeaderTitle("/about");
  }, []);

  return (
    <>
      <main>
        <p>Hi! I'm Bed Pandey (yes, that's my real name).</p>
        <p>I'm currently a student at the University of Central Florida studying Computer Science.</p>
      </main>
    </>
  );
}