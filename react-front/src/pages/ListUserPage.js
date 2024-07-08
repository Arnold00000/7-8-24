// C:\react-js\myreactdev\src\pages\ListUserPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListUserPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/listusers")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container">
            <h2>User List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} className="btn btn-primary">Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function handleDelete(id) {
    axios.delete(`http://127.0.0.1:5000/userdelete/${id}`)
        .then(() => {
            alert("User deleted!");
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
}

export default ListUserPage;
