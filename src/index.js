import React from "react";
import ReactDOM from "react-dom";

import Map from "./Map";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Map maxZoom={5} zoomStep={0.2} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
