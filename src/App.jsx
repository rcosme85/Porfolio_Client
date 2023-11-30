import { useState } from 'react'

// import './App.css'
import { Home } from './components/Home'
import { Porfolio } from './components/Porfolio';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { NavBar2 } from './components/NavBar2';
import { Home2 } from './components/Home2';

function App() {

  return (
    <div>
      <NavBar />
      {/* <NavBar2/> */}
      <hr />
      {/* <Home /> */}
      <Home2/>
      <About />
      <Porfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
