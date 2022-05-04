import React, { useState } from  'react';
import styles from './css/UserForm.module.css';
    
// const container = {
//     width: "400px",
//     margin: "15px auto",
//     textAlign : "center"

// };

// const flex = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "start"
// };

// const btn = {
//     width: "120px",
//     margin: "5px auto"
// }

// const label = { 
//     display: "inline-block",
//     width: "210px",
//     textAlign: "left"
// }

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConfirm, setPasswordConfirm] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            alert("Passwords do not match!");
        }
        else {
            const newUser = { firstName, lastName, email, password }
            console.log("Welcome", newUser);
        }
    };
    
    return(
        <div className={styles.container }>
            <form onSubmit={ createUser } className={styles.flex }>
                <div>
                    <label className={styles.label}>First name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) }
                    value={firstName} />
                </div>
                <div>
                    <label className={styles.label}>Last name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) }
                    value={lastName} />
                </div>
                <div>
                    <label className={styles.label}>Email Address: </label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) }
                    value={email} />
                </div>
                <div>
                    <label className={styles.label}>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) }
                    value={password} />
                </div>
                <div>
                    <label className={styles.label}>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setPasswordConfirm(e.target.value) }
                    value={passwordConfirm} />
                </div>
                <input type="submit" value="Create User" className={styles.btn } />
            </form>
            <div>
                <p>
                    First Name: {firstName}
                </p>
                <p>
                    Last Name: {lastName}
                </p>
                <p>
                    Email: {email}
                </p>
                <p>
                    Password: {password}
                </p>
                <p>
                    Password Confirm: {passwordConfirm}
                </p>
            </div>
        </div>
    );
};
    
export default UserForm;