import React, { useEffect } from "react";
import logo from "./logo.svg";
import ScriptTag from "react-script-tag";

const jsfile = require("./game_of_life/main.js");

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = jsfile;
    script.async = true;

    const location = document.querySelector(".layout__generation-grid");
    location.appendChild(script);

    return () => {
      location.removeChild(script);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Conway's Game of Life</h1>
      </header>

      <main className="layout">
        <div className="layout__generation">
          <h2 className="heading__secondary">Generation: #</h2>
          <section className="layout__generation-grid">
            Grid Here
            {/* <ScriptTag type="text/javascript" src={jsfile} /> */}
          </section>
          <section className="layout__generation-buttons">
            <button className="btn">Play</button>
            <button className="btn">Pause</button>
            <button className="btn">Stop</button>
          </section>
        </div>
        <div className="layout__presets">
          <h2 className="heading__secondary">Presets</h2>
          <section className="presets__one">One</section>
          <section className="presets__two">two</section>
          <section className="presets__three">three</section>
          <section className="presets__four">four</section>
        </div>
        <div className="layout__rules">
          <h2 className="heading__secondary">Rules</h2>

          <ul className="rules">
            <li className="rules__item">rule 1</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
