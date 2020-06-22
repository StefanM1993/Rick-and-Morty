import React from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Characters } from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
