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
    const setNU = props.setNewUser;

    const createUser = (e) => {
        e.preventDefault();
        // console.log(e)
        // console.log(`First Name: ${e.target["0"].value}`)
        // console.log(`Last Name: ${e.target["1"].value}`)
        // console.log(`Email: ${e.target["2"].value}`)
        // console.log(`Password: ${e.target["3"].value}`)
        // console.log(`Password Confirm: ${e.target["4"].value}`)
        if (Object.values(error).every( (v) => !v)) {
            setNU({ firstName, lastName, email, password })
            console.log("Welcome new user!");
            // I hate the asynchronous nature of REACT
            // Object.keys(user).forEach( (k) => setUser( { ...user, [k]:""  } ))
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirm: ""
              });
        }
    };

    const keyHandler = (e) => {
        const {value, name} = e.target
        setUser({
            ...user,
            [name]: value
        });
<<<<<<< HEAD
=======
        setErrors(name, value)
    }

    const setErrors = (name, value) => {
        console.log(`Begun set error with\nname: ${name} || value: ${value}`)
        let errVal = ""
        switch (name) {
            case "firstName":
                console.log(`Triggered firstName.`)
                console.log(`Value: ${value}\n||\nValue Length: ${value.length} `)
                if (value && value.length < 2){
                    errVal = "First name must be at least 2 characters long."
                }
                setError({
                    ...error,
                    fNameError: errVal
                });
                break;
            case "lastName":
                if (value && value.length < 2){
                    errVal = "Last name must be at least 2 characters long."
                }
                setError({
                    ...error,
                    lNameError: errVal
                });
                break;
            case "email":
                if (value && value.length < 5){
                    errVal = "Email name must be at least 5 characters long."
                }
                setError({
                    ...error,
                    emailError: errVal
                });
                break;
            case "password":
                if (value && passwordConfirm && value !== passwordConfirm){
                    errVal = "Passwords must match"
                }
                setError({
                    ...error,
                    passwordLengthError: errVal
                });
                break;
            case "passwordConfirm":
                if (value && password && value.length < 8){
                    errVal = "Password must be at least 8 characters long."
                }
                setError({
                    ...error,
                    passwordMatchError: errVal
                });
                break;
        }
        // setError({
        //     ...error,
        //     [name]: errVal
        // });
>>>>>>> state-create-user
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