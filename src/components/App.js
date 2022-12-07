import React from "react";
import Header from "./Header";
import GameControl from "./GameControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryPage from "./StoryPage";

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<GameControl />} />
        <Route path="/StoryPage" element={<StoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;