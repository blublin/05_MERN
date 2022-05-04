import './App.css';
import { useState } from 'react';
import UserForm from './components/UserForm';
import DisplayForm from './components/DisplayForm';

function App() {
  const [ user, setUser ] = useState({
    firstName: "",
    fNameError: "",
    lastName: "",
    lNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordConfirm: "",
    passwordLengthError: "",
    passwordMatchError: "",
  })

  return (
    <div className="App">
      <UserForm user={ user } setUser={ setUser } />
      <DisplayForm setUser={ setUser }/>
    </div>
  );
}

export default App;
