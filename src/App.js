import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Skill from './components/skill';
import Experience from './components/experience';
import Project from "./components/project";
import ContactMe from "./components/contact_me";

function App() {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
  }, []);

  return (
    <div className="App">
        <Navbar />
        <Home />
        <Skill />
        <Experience />
        <Project />
        <ContactMe />
    </div>
  );
}

export default App;