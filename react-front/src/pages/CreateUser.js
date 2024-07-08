// C:\react-js\myreactdev\src\pages\CreateUser.js
import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
    const [userForm, setUserForm] = useState({ name: "", email: "", about: "", password: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:5000/useradd", userForm)
            .then(response => {
                alert("User added!");
                window.location.href = "/";
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="container">
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" className="form-control" value={userForm.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" className="form-control" value={userForm.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>About:</label>
                    <input type="text" name="about" className="form-control" value={userForm.about} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" className="form-control" value={userForm.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CreateUser;
