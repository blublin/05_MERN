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

    const fNameHandler = (e) => {
        setUser({
            ...user,
            firstName: e.target.value
        });
        if (firstName && firstName.length < 2) {
            setError({
                ...error,
                fNameError: "First name must be at least 2 characters long."
            });
        }
        else {
            setError({
                ...error,
                fNameError: ""
            });
        }
    }
    const lNameHandler = (e) => {
        setUser({
            ...user,
            lastName: e.target.value
        });
        if (lastName && lastName.length < 2) {
            setError({
                ...error,
                lNameError: "Last name must be at least 2 characters long."
            });
        }
        else {
            setError({
                ...error,
                lNameError: ""
            });
        }
    }
    const emailHandler = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });
        if (email && email.length < 5) {
            setError({
                ...error,
                emailError: "Email must be at least 5 characters long."
            });
        }
        else {
            setError({
                ...error,
                emailError: ""
            });
        }
    }
    const passwordHandler = (e) => {
        setUser({
            ...user,
            passwordConfirm:e.target.value
        });
        if (password && passwordConfirm) {
            if (password !== passwordConfirm) {
                setError({
                    ...error,
                    passwordMatchError: "Passwords must match"
                });
            }
            else {
                setError({
                    ...error,
                    passwordMatchError: ""
                });
            }

            if( password.length < 8) {
                setError({
                    ...error,
                    passwordLengthError: "Password must be at least 8 characters long."
                });
            }
            else {
                setError({
                    ...error,
                    passwordLengthError: ""
                });
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
                        error.fNameError ?
                        <p style={{color:"red"}}>{error.fNameError}</p> :
                        null
                    }
                </div>
                <div>
                    <label className={styles.label}>Last name: </label>
                    <input type="text" onChange={ lNameHandler }
                    value={lastName} />
                    {
                        error.lNameError ?
                        <p style={{color:"red"}}>{error.lNameError}</p> :
                        null
                    }
                </div>
                <div>
                    <label className={styles.label}>Email Address: </label>
                    <input type="email" onChange={ emailHandler }
                    value={email} />
                    {
                        error.emailError ?
                        <p style={{color:"red"}}>{error.emailError}</p> :
                        null
                    }
                </div>
                <div>
                    <label className={styles.label}>Password: </label>
                    <input type="password"  onChange={ (e) => setUser({...user,"password":e.target.value}) }
                    value={password} />
                    {
                        error.passwordLengthError ?
                        <p style={{color:"red"}}>{error.passwordLengthError}</p> :
                        null
                    }
                    {
                        error.passwordMatchError ?
                        <p style={{color:"red"}}>{error.passwordMatchError}</p> :
                        null
                    }
                </div>
                <div>
                    <label className={styles.label}>Confirm Password: </label>
                    <input type="password" onChange={ passwordHandler }
                    value={passwordConfirm} />
                    {
                        error.passwordLengthError ?
                        <p style={{color:"red"}}>{error.passwordLengthError}</p> :
                        null
                    }
                    {
                        error.passwordMatchError ?
                        <p style={{color:"red"}}>{error.passwordMatchError}</p> :
                        null
                    }
                </div>
                <input type="submit" value="Create User" className={styles.btn } />
            </form>
        </div>
    );
};
    
export default UserForm;