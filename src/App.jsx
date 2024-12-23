// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';

function App() {
  return(<div className={style.App}>
    <Navbar/>
    <Hero/>
  </div>
  )
}

export default App
