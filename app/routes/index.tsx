import { Link } from '@remix-run/react';

import Navbar from './Navbar';
import Intro from './Intro';
import Experience from './Experience';
import Techstack from './Techstack';
import Projects from './Projects';
import BottomBar from './BottomBar';

export default function Index() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Experience />
      <Techstack />
      <Projects />
      <BottomBar />
    </div>
  );
}
