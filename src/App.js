import React from "react";
import "./App.css";
import logo from "./logo.svg";
import AppContainer from "./AppContainer";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Nav />
      <AppContainer>
        <p>test</p>
      </AppContainer>
      <main>
        <Toggle />
      </main>
    </div>
  );
}

export default App;
