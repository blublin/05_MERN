// import React, { useState } from  'react';
import styles from './css/UserForm.module.css';


const DisplayUser = (props) => {
    const {
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    } = props.user;

    return(
        <div className={styles.container }>
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
    
export default DisplayUser;