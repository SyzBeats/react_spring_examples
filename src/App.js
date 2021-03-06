import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import logo from "./logo.svg";
import Nav from "./components/Nav";
import Routes from "./Routes";
import Modal from "./Modal";
import WayPoint from "./components/Waypoint";
import Checkout from "./components/Checkout";
import Boxes from "./components/Boxes";
function App() {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0) scale(1)` : `translate3d(100%,0,0) scale(0.6)`,
    filter: isNavOpen ? `brightness(1)` : `brightness(0)`
  });
  const fadeInUp = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(0,100%,0)`
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <button className='menu-button' onClick={() => setNavOpen(!isNavOpen)}>
          Menu
        </button>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      {/* <Nav style={fadeInUp} /> */}
      <main>
        {/* <Routes /> */}
        {/* <Modal /> */}
        {/* <WayPoint /> */}
        <Checkout isOpen={isNavOpen} />
        <Boxes />
      </main>
    </div>
  );
}

export default App;
