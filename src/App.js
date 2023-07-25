import React from 'react'
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Home />
  <About/>
  <Skills/>
  <Work/>
  <Contact/>
    </div>
  );
}

export default App;
