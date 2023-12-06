

// import './App.css'
import { Home } from './components/Home'
import { Porfolio } from './components/Porfolio';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import { About } from './components/About';


function App() {

  return (
    <div>
      <NavBar />
      <hr />
      <Home />
      <About />
      <Porfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
