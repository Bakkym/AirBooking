import React from "react"
import Plane from "./components/Plane"
import Menu from "./components/Menu"
import Info from "./components/Info"
import "./components/styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="flex">
        <Menu />
        <Plane />
      </div>
        <Info />
    </div>
  );
}
