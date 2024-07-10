import React, { } from "react";

import { Link } from 'react-router-dom';

export default function ListUserPage() {
    return (
        <div>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12">
                        <p> <Link to="/addnewuser" className="btn btn-success">Add New User</Link></p>
                        <h1>List Users</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
