import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../css/LR.css";

const LoginRegDivs = () => {
    const navigate = useNavigate();

    const [logBtnState, setLogBtnState] = useState(true);
    const [regBtnState, setRegBtnState] = useState(false);

    // const props = { logBtnState, setLogBtnState, regBtnState, setRegBtnState};

    const logRegToggle = (e) => {
        e.preventDefault();
        console.log("Login Register Toggle Activated");
        logBtnState ? navigate("/register") : navigate("/login");
        setLogBtnState(!logBtnState);
        setRegBtnState(!regBtnState);
    };

    return (
        <div className="theBackground">
            <div className="container d-flex flex-column justify-content-md-center">
                <Header />
                <div className="row d-flex justify-content-md-center">
                    <div className="formContainer">
                        <div className="formPage">
                            <Outlet
                                context={{
                                    logRegToggle,
                                    logBtnState,
                                    regBtnState,
                                    setLogBtnState,
                                    setRegBtnState
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegDivs;
