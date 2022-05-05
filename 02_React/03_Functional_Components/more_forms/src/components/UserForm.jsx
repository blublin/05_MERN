import React, {useState} from  'react';
import styles from './css/UserForm.module.css';


const UserForm = (props) => {
    const {
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
} = props.user;


const [error, setError] = useState({
    fNameError: "",
    lNameError: "",
    emailError: "",
    passwordLengthError: "",
    passwordMatchError: ""
})


    const user = props.user;
    const setUser = props.setUser;

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password }
        console.log("Welcome", newUser);
    };

    const keyHandler = (e) => {
        const {value, name} = e.target
        setUser({
            ...user,
            [name]: value
        });
    }
    
    return(
        <div className={styles.container }>
            <form onSubmit={ createUser } className={styles.flex }>
                <div>
                    <label className={styles.label}>First name: </label>
                    <input onChange={ keyHandler }
                    name="firstName"
                    type="text" 
                    value={firstName} />
                    {
                        firstName && firstName.length < 2 ?
                        <p style={{color:"red"}}>"First name must be at least 2 characters long."</p> :
                        null
                    }
                </div>
                <div>
                    <label className={styles.label}>Last name: </label>
                    <input onChange={ keyHandler }
                    name="lastName"
                    type="text" 
                    value={lastName} />
                    {
                        lastName && lastName.length < 2 ?
                        <p style={{color:"red"}}>"Last name must be at least 2 characters long."</p> :
                        null
                    }
                </div>
                <div>
                    <label className={styles.label}>Email Address: </label>
                    <input onChange={ keyHandler }
                    name="email"
                    type="text" 
                    value={email} />
                    {
                        email && email.length < 5 ?
                        <p style={{color:"red"}}>"Email must be at least 5 characters long."</p> :
                        null
                    }
                </div>
                <div>
                    <label className={styles.label}>Password: </label>
                    <input onChange={ keyHandler }
                    name="password"
                    type="password" 
                    value={password} />
                    {
                        password && passwordConfirm
                        ? password !== passwordConfirm
                            ? <p style={{color:"red"}}>"Passwords must match"</p>
                            : null
                        : null
                    }
                    {
                        password && passwordConfirm
                            ? password.length < 8
                                ? <p style={{color:"red"}}>"Password must be at least 8 characters long."</p>
                                : null
                            : null
                    }
                </div>
                <div>
                    <label className={styles.label}>Confirm Password: </label>
                    <input onChange={ keyHandler }
                    name="passwordConfirm"
                    type="password" 
                    value={passwordConfirm} />
                    {
                        password && passwordConfirm
                        ? password !== passwordConfirm
                            ? <p style={{color:"red"}}>"Passwords must match"</p>
                            : null
                        : null
                    }
                </div>
                <input type="submit" value="Create User" className={styles.btn } />
            </form>
        </div>
    );
};
    
export default UserForm;