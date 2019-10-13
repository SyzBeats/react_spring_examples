import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import logo from "./logo.svg";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";
import Checkout from "./components/Checkout";
function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0) scale(1)` : `translate3d(100%,0,0) scale(0.6)`,
    filter: isNavOpen ? `brightness(1)` : `brightness(0)`
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <button className='menu-button' onClick={() => setNavOpen(!isNavOpen)}>
          Menu
        </button>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      {/* <Nav style={navAnimation} /> */}
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </div>
  );
}

export default App;
