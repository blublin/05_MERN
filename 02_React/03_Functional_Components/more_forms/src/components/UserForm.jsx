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
        setErrors(name, value)
    }

    const setErrors = (name, value) => {
        switch (name) {
            case "firstName":
                if (value && value.length < 2){
                    const errVal = "First name must be at least 2 characters long."
                }
                else {
                    const errVal = ""
                }
                break;
            case "lastName":
                if (value && value.length < 2){
                    errVal = "Last name must be at least 2 characters long."
                }
                else {
                    const errVal = ""
                }
                break;
            case "email":
                if (value && value.length < 5){
                    errVal = "Email name must be at least 5 characters long."
                }
                else {
                    const errVal = ""
                }
                break;
            case "password":
                if (value && passwordConfirm && value !== passwordConfirm){
                    errVal = "Passwords must match"
                }
                else {
                    const errVal = ""
                }
                break;
            case "passwordConfirm":
                if (value && password && value.length < 8){
                    errVal = "Password must be at least 8 characters long."
                }
                else {
                    const errVal = ""
                }
                break;
        }
        setError({
            ...error,
            [name]: errVal
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
                    <p style={{color:"red"}}>{ error.fNameError}</p>
                </div>
                <div>
                    <label className={styles.label}>Last name: </label>
                    <input onChange={ keyHandler }
                    name="lastName"
                    type="text" 
                    value={lastName} />
                    <p style={{color:"red"}}>{ error.lNameError}</p>
                </div>
                <div>
                    <label className={styles.label}>Email Address: </label>
                    <input onChange={ keyHandler }
                    name="email"
                    type="text" 
                    value={email} />
                    <p style={{color:"red"}}>{ error.emailError}</p>
                </div>
                <div>
                    <label className={styles.label}>Password: </label>
                    <input onChange={ keyHandler }
                    name="password"
                    type="password" 
                    value={password} />
                    <p style={{color:"red"}}>{ error.passwordMatchError}</p>
                    <p style={{color:"red"}}>{ error.passwordLengthError}</p>
                </div>
                <div>
                    <label className={styles.label}>Confirm Password: </label>
                    <input onChange={ keyHandler }
                    name="passwordConfirm"
                    type="password" 
                    value={passwordConfirm} />
                    <p style={{color:"red"}}>{ error.passwordMatchError}</p>
                </div>
                <input type="submit" value="Create User" className={styles.btn } />
            </form>
        </div>
    );
};
    
export default UserForm;