import React from  'react';
import styles from './css/UserForm.module.css';


const UserForm = (props) => {
    const {
    firstName,
    fNameError,
    lastName,
    lNameError,
    email,
    emailError,
    password,
    passwordConfirm,
    passwordLengthError,
    passwordMatchError
    } = this.props.user;

    const user = this.props.user;
    const setUser = this.props.setUser;

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
            setUser({
                ...user,
                fNameError: "First name must be at least 2 characters long."
            })
        }
    }
    const lNameHandler = (e) => {
        setUser({
            ...user,
            lastName: e.target.value
        });
        if (lastName && lastName.length < 2) {
            setUser({
                ...user,
                lNameError: "Last name must be at least 2 characters long."
            })
        }
    }
    const emailHandler = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });
        if (email && email.length < 5) {
            setUser({
                ...user,
                emailError: "Email must be at least 5 characters long."
            })
        }
    }
    const passwordHandler = (e) => {
        setUser({
            ...user,
            passwordConfirm:e.target.value
        });
        if (password && passwordConfirm) {
            if (password !== passwordConfirm) {
                setUser({
                    ...user,
                    passwordMatchError: "Passwords must match"
                })
            }
            if( password.length < 8) {
                setUser({
                    ...user,
                    passwordLengthError: "Password must be at least 8 characters long."
                })
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
                        fNameError ?
                        <p style={{color:"red"}}>{fNameError}</p> :
                        {fNameError}
                    }
                </div>
                <div>
                    <label className={styles.label}>Last name: </label>
                    <input type="text" onChange={ lNameHandler }
                    value={lastName} />
                    {
                        lNameError ?
                        <p style={{color:"red"}}>{lNameError}</p> :
                        {lNameError}
                    }
                </div>
                <div>
                    <label className={styles.label}>Email Address: </label>
                    <input type="email" onChange={ emailHandler }
                    value={email} />
                    {
                        emailError ?
                        <p style={{color:"red"}}>{emailError}</p> :
                        {emailError}
                    }
                </div>
                <div>
                    <label className={styles.label}>Password: </label>
                    <input type="password"  onChange={ (e) => setUser({...user,"password":e.target.value}) }
                    value={password} />
                    {
                        passwordLengthError ?
                        <p style={{color:"red"}}>{passwordLengthError}</p> :
                        {passwordLengthError}
                    }
                    {
                        passwordMatchError ?
                        <p style={{color:"red"}}>{passwordMatchError}</p> :
                        {passwordMatchError}
                    }
                </div>
                <div>
                    <label className={styles.label}>Confirm Password: </label>
                    <input type="password" onChange={ passwordHandler }
                    value={passwordConfirm} />
                    {
                        passwordLengthError ?
                        <p style={{color:"red"}}>{passwordLengthError}</p> :
                        {passwordLengthError}
                    }
                    {
                        passwordMatchError ?
                        <p style={{color:"red"}}>{passwordMatchError}</p> :
                        {passwordMatchError}
                    }
                </div>
                <input type="submit" value="Create User" className={styles.btn } />
            </form>
        </div>
    );
};
    
export default UserForm;