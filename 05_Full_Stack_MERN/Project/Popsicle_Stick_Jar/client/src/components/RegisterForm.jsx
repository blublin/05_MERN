import React from "react";
import { useOutletContext } from "react-router-dom";
import "../css/LR.css";

const RegisterForm = () => {
    const { logRegToggle, logBtnState, regBtnState } = useOutletContext();

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
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
                    required
                />
            </div>
            <div className="form-group formElement mb-2">
                <input
                    type="number"
                    className="form-control m-auto inputFocus"
                    id="zipcode"
                    name="zipcode"
                    placeholder="zipcode"
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
            <input
                type="submit"
                className="shadow btn border btn-default bg-primary text-light"
                value="Register"
            />
            <input
                type="reset"
                className="shadow btn border btn-default bg-primary text-light"
            />
        </form>
    );
};

export default RegisterForm;
