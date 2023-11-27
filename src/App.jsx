import { useState } from 'react'

// import './App.css'
import { Home } from './components/Home'
import { Porfolio } from './components/Porfolio';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';
import { About } from './components/About';

function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Porfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
