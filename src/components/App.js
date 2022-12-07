import React from "react";
import Header from "./Header";
import GameControl from "./GameControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./MenuPage"

function App(){
  return (
    <Router>
      <Header />
      <GameControl />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;