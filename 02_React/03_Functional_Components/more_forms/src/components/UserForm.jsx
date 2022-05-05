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

    // Form submission
    const createUser = (e) => {
        e.preventDefault();
        if (Object.values(error).every( (e) => !e)) {
            props.setNewUser({ firstName, lastName, email, password });
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirm: "",
            });
        }
    };

    // Setter handlers
    const fNameHandler = (e) => {
        setUser({
            ...user,
            firstName: e.target.value
        });
    }
    const lNameHandler = (e) => {
        setUser({
            ...user,
            lastName: e.target.value
        });
    }
    const emailHandler = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });
    }
    const passwordHandler = (e) => {
        setUser({
            ...user,
            passwordConfirm:e.target.value
        });
    }

    // Error Message Handling
    const fNameCheck = () => {
        if (firstName && firstName.length < 2) {
            setError({...error, fNameError : "First name must be at least 2 characters long."})
            return true
        }
        else{
            setError({...error, fNameError : ""})
            return false
        }
    }
    const lNameCheck = () => {
        if (lastName && lastName.length < 2) {
            setError({...error, fNameError : "Last name must be at least 2 characters long."})
            return true
        }
        else{
            setError({...error, fNameError : ""})
            return false
        }
    }
    const emailCheck = () => {
        if (email && email.length < 5) {
            setError({...error, fNameError : "Email must be at least 5 characters long."})
            return true
        }
        else{
            setError({...error, fNameError : ""})
            return false
        }
    }
    const pMatchCheck = () => {
        if (password && passwordConfirm) {
            if (password !== passwordConfirm) {
                setError({...error, fNameError : "Passwords must match."})
                return true
            }
            else{
                setError({...error, fNameError : ""})
                return false
            }
        }
    }
    const pLengthCheck = () => {
        if (password && passwordConfirm) {
            if (password.length < 8) {
                setError({...error, fNameError : "Password must be at least 8 characters long."})
                return true
            }
            else{
                setError({...error, fNameError : ""})
                return false
            }
        }
    }

    return(
        <div className={styles.container }>
            <form onSubmit={ createUser } className={styles.flex }>
                <div>
                    <label className={styles.label}>First name: </label>
                    <input type="text" onChange={ fNameHandler }
                    value={firstName} />
                    {
                        fNameCheck()
                            ? <p style={{color:"red"}}>{ error.fNameError }</p>
                            : null
                    }
                </div>
                <div>
                    <label className={styles.label}>Last name: </label>
                    <input type="text" onChange={ lNameHandler }
                    value={lastName} />
                    {
                        lNameCheck()
                            ? <p style={{color:"red"}}>{ error.lNameError }</p>
                            : null
                    }
                </div>
                <div>
                    <label className={styles.label}>Email Address: </label>
                    <input type="email" onChange={ emailHandler }
                    value={email} />
                    {
                        emailCheck()
                            ? <p style={{color:"red"}}>{ error.emailError }</p>
                            : null
                    }
                </div>
                <div>
                    <label className={styles.label}>Password: </label>
                    <input type="password"  onChange={ (e) => setUser({...user,"password":e.target.value}) }
                    value={password} />
                    {
                        pMatchCheck()
                            ? <p style={{color:"red"}}>{ error.passwordMatchError }</p>
                            : null
                    }
                    {
                        pLengthCheck()
                            ? <p style={{color:"red"}}>{ error.passwordLengthError}</p>
                            : null
                    }
                </div>
                <div>
                    <label className={styles.label}>Confirm Password: </label>
                    <input type="password" onChange={ passwordHandler }
                    value={passwordConfirm} />
                    {
                        pMatchCheck()
                            ? <p style={{color:"red"}}>{ error.passwordMatchError }</p>
                            : null
                    }
                </div>
                <input type="submit" value="Create User" className={styles.btn } />
            </form>
        </div>
    );
};
    
export default UserForm;