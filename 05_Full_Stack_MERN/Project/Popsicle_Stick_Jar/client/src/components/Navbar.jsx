import React from "react";

const Navbar = () => {
    return (
        <div class="col px-5 d-flex justify-content-between align-items-end">
            <a href="/groups/new" class="btn btn-outline-success">
                New Group
            </a>
            <a href="/users/me" class="btn btn-outline-success">
                Account
            </a>
            <a href="/logout" class="btn btn-outline-danger">
                Logout
            </a>
        </div>
    );
};

export default Navbar;
