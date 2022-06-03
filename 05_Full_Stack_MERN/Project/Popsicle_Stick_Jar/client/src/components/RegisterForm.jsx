import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../css/LR.css";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { logRegToggle, logBtnState, regBtnState, setLogBtnState, setRegBtnState } = useOutletContext();
    const [regObj, setRegObj] = useState({
        first_name: "",
        last_name: "",
        email: "",
        birthday: "",
        password: "",
        password_confirm: "",
        zip_code: "",
        avatar_num: 0
    })

    useEffect( () => {
        setLogBtnState(false)
        setRegBtnState(true)
    })

    const eventUpdater = (e) => {
        const {name, value} = e.target;
        setRegObj({
            ...regObj,
            [name]: value
        });
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const submitData = {
            ...regObj,
            birthday: new Date(regObj.birthday)
        }
        
        axios
            .post("http://localhost:8000/api/users", submitData, {withCredentials: true})
            .then( newUser => {
                console.log(newUser.data)
                navigate("/dashboard");
            })
            .catch( err => console.log(err))
    }

    const resetForm = (event) => {
        event.preventDefault();
        const resetObj = {}
        for (let key in regObj) {
            key !== "avatar_num"
                ? resetObj.key = ""
                : resetObj.key = 0
        }
        setRegObj(resetObj)
    }

    return (
        <form
            onSubmit={submitHandler}
            className="aForm p-3 formBg text-light text-center"
        >
            <div className="tabs d-flex justify-content-evenly align-items-center">
                <button
                    type="button"
                    className={`tabInner btn login text-light ${
                        logBtnState && "notHidden"
                    }`}
                    onClick={logRegToggle}
                >
                    Login
                </button>
                <hr
                    style={{ width: "1px", size: "40px" }}
                    className="tabInner"
                />
                <button
                    type="button"
                    className={`tabInner btn signup text-light ${
                        regBtnState && "notHidden"
                    }`}
                >
                    Signup
                </button>
            </div>
            <label className="aLabel text-light mb-2">Register</label>
            <div className="form-group formElement mb-2">
                <input
                    type="text"
                    className="form-control m-auto inputFocus"
                    id="first_name"
                    name="first_name"
                    placeholder="first name"
                    value={regObj.first_name}
                    onChange={ eventUpdater }
                    required
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="text"
                    className="form-control m-auto inputFocus"
                    id="last_name"
                    name="last_name"
                    placeholder="last name"
                    value={regObj.last_name}
                    onChange={ eventUpdater }
                    required
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="email"
                    className="form-control m-auto inputFocus"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={regObj.email}
                    onChange={ eventUpdater }
                    required
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="password"
                    className="form-control m-auto inputFocus"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={regObj.password}
                    onChange={ eventUpdater }
                    required
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="password"
                    className="form-control m-auto inputFocus"
                    id="password_confirm"
                    name="password_confirm"
                    placeholder="confirm password"
                    value={regObj.password_confirm}
                    onChange={ eventUpdater }
                    required
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="date"
                    className="form-control m-auto inputFocus"
                    id="birthday"
                    name="birthday"
                    placeholder="birthday"
                    value={regObj.birthday}
                    onChange={ eventUpdater }
                    required
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="number"
                    className="form-control m-auto inputFocus"
                    id="zip_code"
                    name="zip_code"
                    placeholder="zipcode"
                    value={regObj.zip_code}
                    onChange={ eventUpdater }
                    required
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="text"
                    className="form-control m-auto inputFocus"
                    id="sig_other_email"
                    name="sig_other_email"
                    placeholder="significant others email"
                />
            </div>
            <div className="form-group formElemment d-flex justify-content-around">
                <input
                    type="submit"
                    className="shadow btn border btn-default bg-primary text-light"
                    value="Register"
                />
                <input
                    type="reset"
                    className="shadow btn border btn-default bg-primary text-light"
                    onClick={ resetForm }
                />
            </div>
        </form>
    );
};

export default RegisterForm;
