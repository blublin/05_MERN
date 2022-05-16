import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import EditProduct from './views/EditProduct';

function App() {
  return (
    <Router>
      <fieldset className='App'>
        <legend>App.jsx</legend>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:prodID" element={<ProductDetail />} />
          <Route path="/:prodID/edit" element={<EditProduct />} />
        </Routes>
      </fieldset>
    </Router>
  );
}

export default App;
