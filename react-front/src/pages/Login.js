// C:\react-js\myreactdev\src\components\Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [loginForm, setloginForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    function btnlogin(event) {
        axios.post("http://127.0.0.1:5000/logintoken", {
            email: loginForm.email,
            password: loginForm.password
        })
            .then(response => {
                props.setToken(response.data.access_token);
                alert("Successfully Login");
                localStorage.setItem('email', loginForm.email);
                navigate('/profile');
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                    if (error.response.status === 401) {
                        alert("Invalid credentials");
                    }
                }
            });

        setloginForm({ email: "", password: "" });
        event.preventDefault();
    }

    function handleChange(event) {
        const { value, name } = event.target;
        setloginForm(prevNote => ({
            ...prevNote, [name]: value
        }));
    }

    let imgs = [
        'https://as1.ftcdn.net/v2/jpg/03/39/70/90/1000_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg',
    ];

    return (
        <div>
            <div className="container h-50">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-50">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={imgs[0]} className="img-fluid" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in</p>
                                </div>

                                <div className="divider d-flex align-items-center my-4"></div>

                                <div className="form-outline mb-4">
                                    <input type="email" name="email" value={loginForm.email} onChange={handleChange} className="form-control form-control-lg" placeholder="Enter a valid email address" />
                                    <label className="form-label">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" name="password" value={loginForm.password} onChange={handleChange} className="form-control form-control-lg" placeholder="Enter password" />
                                    <label className="form-label">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" />
                                        <label className="form-check-label">Remember me</label>
                                    </div>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button onClick={btnlogin} type="button" className="btn btn-primary btn-lg">Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup" className="link-danger">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
