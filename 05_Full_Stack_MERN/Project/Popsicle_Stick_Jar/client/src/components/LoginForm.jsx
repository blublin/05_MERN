import React from "react";
import { useOutletContext } from "react-router-dom";
import "../css/LR.css";

const LoginForm = () => {
    const { logRegToggle, logBtnState, regBtnState } = useOutletContext();

    return (
        <form
            // action="/login"
            // method="POST"
            onSubmit={(e) => e.preventDefault()}
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
                    placeholder="email"
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="password"
                    className="form-control m-auto inputFocus"
                    id="password"
                    name="password"
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
