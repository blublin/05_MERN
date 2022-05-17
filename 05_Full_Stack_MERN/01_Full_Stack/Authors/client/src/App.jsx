import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './views/Main';
import AuthorDetail from './views/AuthorDetail';
import AuthorEdit from './views/AuthorEdit';

function App() {
  return (
    <Router>
      <fieldset className='App'>
        <legend>App.jsx</legend>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:author_id" element={<AuthorDetail />} />
          <Route path="/:author_id/edit" element={<AuthorEdit />} />
        </Routes>
      </fieldset>
    </Router>
  );
}

export default App;
