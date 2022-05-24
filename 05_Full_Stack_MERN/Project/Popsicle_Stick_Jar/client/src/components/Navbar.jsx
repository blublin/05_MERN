import React from "react";

const Navbar = () => {
    return (
        <div className="col px-5 d-flex justify-content-between align-items-end">
            <a href="/groups/new" className="btn btn-outline-success">
                New Group
            </a>
            <a href="/users/me" className="btn btn-outline-success">
                Account
            </a>
            <a href="/logout" className="btn btn-outline-danger">
                Logout
            </a>
        </div>
    );
};

export default Navbar;
