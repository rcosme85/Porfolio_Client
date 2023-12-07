

// import './App.css'
import { Home } from './components/Home'
import { Porfolio } from './components/Porfolio';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';


function App() {

  return (
    <div>
      <NavBar />
      <hr />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
