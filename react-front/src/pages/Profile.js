// C:\react-js\myreactdev\src\components\Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile(props) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const email = localStorage.getItem('email');
        axios.get(`http://127.0.0.1:5000/profile/${email}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                }
            });
    }, [props.token]);

    return (
        <div className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Profile</h2>
                                    <p className="text-white-50 mb-5">User information:</p>
                                    <div>
                                        <p>Name: {user.name}</p>
                                        <p>Email: {user.email}</p>
                                        <p>About: {user.about}</p>
                                    </div>
                                    <button className="btn btn-outline-light btn-lg px-5" onClick={() => props.setToken(null)}>Logout</button>
                                </div>
                                <div>
                                    <p className="mb-0">Go back to <a href="/" className="text-white-50 fw-bold">Home</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
