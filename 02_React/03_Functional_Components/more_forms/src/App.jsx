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
  const [ newUser, setNewUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })


  return (
    <div className="App">
<<<<<<< Updated upstream
      <h1>Hello World!</h1>
      <UserForm user={ user } setUser={ setUser } setNewUser={ setNewUser } />
      <DisplayForm user={ newUser }/>
=======
      <UserForm user={ user } setUser={ setUser } x={x} />
      <DisplayForm user={ user }/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
