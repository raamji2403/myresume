import React from 'react';
import './App.css';

import Header from './components/Header.js';
import Objective from './components/Objective.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import CourseWorks from './components/CourseWorks.js';
import ExtraCurricular from './components/ExtraCurricular.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Header />
      <Objective />
      <AboutMe />
      <Projects />
      <Skills />
      <CourseWorks />
      <ExtraCurricular />
      <Footer />
    </>
  );
}

export default App;
