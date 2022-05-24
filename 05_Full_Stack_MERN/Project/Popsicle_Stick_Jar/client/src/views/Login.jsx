import React from "react";
import "../css/Login.css"

const Login = () => {
    return (
        <div className="container d-flex flex-column justify-content-md-center">
            <div className="row d-flex justify-content-md-center">
                <div id="form-container">
                    <div id="outer">
                        <form
                            action="/login"
                            method="POST"
                            className="p-3 form-bg text-light text-center"
                        >
                            <div className="tabs d-flex justify-content-evenly align-items-center">
                                <button
                                    type="button"
                                    className="btn login text-light not-hidden"
                                >
                                    Login
                                </button>
                                <hr width="1" size="40px" />
                                <button
                                    type="button"
                                    className="btn signup text-light"
                                    onclick="tab2();"
                                >
                                    Signup
                                </button>
                            </div>
                            <label className="text-light mb-2">Login</label>
                            <div className="form-group form-element mb-2">
                                <input
                                    type="email"
                                    className="form-control m-auto input-focus"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                />
                            </div>
                            <div className="form-group form-element mb-2">
                                <input
                                    type="password"
                                    className="form-control m-auto input-focus"
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
