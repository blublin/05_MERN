import React from "react";
import { Link } from "react-router-dom";
import "../css/LR.css"

const Header = () => {
    return (
        <div className="row titleBlur mt-3 ">
            <Link to="/dashboard"><h1 className="text-center display-1">Popsicle Stick Jar</h1></Link>
            <h3 className="text-center display-6">What fun will you pick?</h3>
        </div>
    );
};

export default Header;
