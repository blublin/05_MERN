import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const logout = (event) => {
        event.preventDefault()
        axios
            .get("http://localhost:8000/api/logout", {withCredentials: true})
            .then(
                navigate("/")
            )
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="col px-5 d-flex justify-content-between align-items-end">
            <a href="/groups/new" className="btn btn-outline-success">
                New Group
            </a>
            <a href="/users/me" className="btn btn-outline-success">
                Account
            </a>
            <button className="btn btn-outline-danger" onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default Navbar;
