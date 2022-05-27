import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../css/LR.css";

const LoginForm = () => {
    const {
        logRegToggle,
        logBtnState,
        regBtnState,
        setLogBtnState,
        setRegBtnState,
    } = useOutletContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setLogBtnState(true);
        setRegBtnState(false);
    });

    const submitHandler = (event) => {
        event.preventDefault();

        axios
            .post(
                "http://localhost:8000/api/users/login",
                { email, password },
                { withCredentials: true }
            )
            .then((good) => {
                console.log(good);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form
            // action="/login"
            // method="POST"
            onSubmit={submitHandler}
            className="aForm p-3 formBg text-light text-center"
        >
            <div className="tabs d-flex justify-content-evenly align-items-center">
                <button
                    // type="button"
                    className={`tabInner btn login text-light ${
                        logBtnState && "notHidden"
                    }`}
                >
                    Login
                </button>
                <hr
                    style={{ width: "1px", size: "40px" }}
                    className="tabInner"
                />
                <button
                    // type="button"
                    className={`tabInner btn signup text-light ${
                        regBtnState && "notHidden"
                    }`}
                    onClick={logRegToggle}
                >
                    Signup
                </button>
            </div>
            <label className="aLabel text-light mb-2">Login</label>
            <div className="form-group formElement mb-2">
                <input
                    type="email"
                    className="form-control m-auto inputFocus"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="password"
                    className="form-control m-auto inputFocus"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
            </div>
            <input
                type="submit"
                className="shadow btn border btn-default bg-success text-light"
                value="Submit"
            />
        </form>
    );
};

export default LoginForm;
