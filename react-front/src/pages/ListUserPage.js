import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function ListUserPage() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://127.0.0.1:5000/listusers').then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }



    return (
        <div>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12">
                        <p> <Link to="/addnewuser" className="btn btn-success">Add New User</Link></p>
                        <h1>List Users</h1>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date Added</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>



                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
