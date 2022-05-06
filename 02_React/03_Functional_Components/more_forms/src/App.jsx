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
<<<<<<< HEAD
    passwordConfirm: "",
=======
    passwordConfirm: ""
>>>>>>> state-create-user
  })
  const [ newUser, setNewUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <UserForm user={ user } setUser={ setUser } setNewUser={ setNewUser } />
      <DisplayForm newUser={ newUser }/>
    </div>
  );
}

export default App;
