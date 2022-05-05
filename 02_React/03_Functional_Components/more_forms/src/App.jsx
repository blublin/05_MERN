import './App.css';
import { useState } from 'react';
import UserForm from './components/UserForm';
import DisplayForm from './components/DisplayForm';

function App() {
  const [ user, setUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  return (
    <div className="App">
      <UserForm user={ user } setUser={ setUser } />
      <DisplayForm user={ user }/>
    </div>
  );
}

export default App;
