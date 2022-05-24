import React from "react";

const Register = () => {
    return (
        <form
            action="/register/create"
            method="POST"
            className="p-3 form-bg text-light text-center"
        >
            <div className="tabs d-flex justify-content-evenly align-items-center">
                <button
                    type="button"
                    className="btn login text-light not-hidden"
                    onclick="tab1();"
                >
                    Login
                </button>
                <hr width="1" size="40px" />
                <button type="button" className="btn signup text-light">
                    Signup
                </button>
            </div>
            <label className="text-light mb-2">Register</label>
            <div className="form-group form-element mb-2">
                <input
                    type="text"
                    className="form-control m-auto input-focus"
                    id="first_name"
                    name="first_name"
                    placeholder="first name"
                    required
                />
            </div>
            <div className="form-group form-element mb-2">
                <input
                    type="text"
                    className="form-control m-auto input-focus"
                    id="last_name"
                    name="last_name"
                    placeholder="last name"
                    required
                />
            </div>
            <div className="form-group form-element mb-2">
                <input
                    type="email"
                    className="form-control m-auto input-focus"
                    id="email"
                    name="email"
                    placeholder="email"
                    required
                />
            </div>
            <div className="form-group form-element mb-2">
                <input
                    type="password"
                    className="form-control m-auto input-focus"
                    id="password"
                    name="password"
                    placeholder="password"
                    required
                />
            </div>
            <div className="form-group form-element mb-2">
                <input
                    type="password"
                    className="form-control m-auto input-focus"
                    id="password_confirm"
                    name="password_confirm"
                    placeholder="confirm password"
                    required
                />
            </div>
            <div className="form-group form-element mb-2">
                <input
                    type="date"
                    className="form-control m-auto input-focus"
                    id="birthday"
                    name="birthday"
                    placeholder="birthday"
                    required
                />
            </div>
            <div className="form-group form-element mb-2">
                <input
                    type="number"
                    className="form-control m-auto input-focus"
                    id="zipcode"
                    name="zipcode"
                    placeholder="zipcode"
                    required
                />
            </div>
            <div className="form-group form-element mb-2">
                <input
                    type="text"
                    className="form-control m-auto input-focus"
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

export default Register;
