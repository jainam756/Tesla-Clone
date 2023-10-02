import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Componenets/Home";
import Carpage from "./Componenets/CarPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/model3" element={<Carpage />} />
      </Routes>
    </>
  );
}

export default App;
