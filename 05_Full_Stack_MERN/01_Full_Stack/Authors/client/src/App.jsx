import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './views/Main';
import Form from './views/Form';

function App() {
  const [runEffect, setRunEffect] = useState(false);

  const flipSwitch = () => {
    console.log(`Run Effect Trigger. Before: ${runEffect}`);
    setRunEffect(!runEffect);
  }
  return (
    <Router>
      <fieldset className='App'>
        <legend>App.jsx</legend>
        <Routes>
          <Route path="/" element={<Main runEffect={runEffect} flipSwitch={flipSwitch} />} />
          <Route path="/new" element={<Form flipSwitch={flipSwitch} />} />
          <Route path="/edit/:author_id" element={<Form flipSwitch={flipSwitch} />} />
        </Routes>
      </fieldset>
    </Router>
  );
}

export default App;
