import "./App.css";
import {BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import ValPage from "./components/ValPage";
import Home from "./components/Home";
import WordPage from "./components/WordPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word/:color/:bgcolor" element={<WordPage />} />
          <Route path="/:val" element={<ValPage />} />
        </Routes>
      </Router>
  );
}

export default App;
