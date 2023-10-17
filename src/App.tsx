import React from "react";
import "./styles/index.scss";
import { About } from "./sections/about";
import { Welcome } from "./sections/welcome";
import { Menu } from "./sections/menu";
import { Contacts } from "./sections/contacts";

function App() {
  return (
    <div className="app">
      <Welcome />
      <Menu />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
