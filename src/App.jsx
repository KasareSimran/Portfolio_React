// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx'

function App() {
  return(<div className={style.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
  </div>
  )
}

export default App
