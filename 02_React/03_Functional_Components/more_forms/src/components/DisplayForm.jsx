import styles from './css/UserForm.module.css';


const DisplayForm = (props) => {
    const {
    firstName,
    lastName,
    email,
    password
    } = props.newUser;

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
            </div>
        </div>
    );
};
    
export default DisplayForm;