import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Register from './views/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
