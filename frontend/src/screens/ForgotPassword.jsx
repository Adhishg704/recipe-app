import React from 'react';
import '../styles/Login.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        rePassword: ""
    });

    function handleInputChange(event) {
        const { name: inputName, value: newValue } = event.target;

        setCredentials({
            ...credentials,
            [inputName]: newValue
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("https://recipe-app-api-six.vercel.app/recipe-app/api/v1/user/updatePassword/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: credentials.email, password: credentials.password, rePassword: credentials.rePassword }),
            credentials: "include"
        });
        const json = await response.json();
        if(json.newPassword) {
            navigate("/login");
        }
        else if(json.errors) {
            setErrorMsg(json.errors[0].msg);
        }
    }

    return (
        <div className='text-start outerDiv bg-dark min-vh-100 w-100 pe-5'>
            <div className=" ms-2 text-light inner-div" >
                <h1 className='mb-3'>Change password</h1>
                <h6 >Email</h6>
                <input placeholder='Please enter your email' name="email" className='form-control mb-2 mt-2 w-100' onChange={handleInputChange} value={credentials.email} ></input>
                <h6>New Password</h6>
                <input type='password' placeholder='Please enter your password' name="password" className='form-control w-100' onChange={handleInputChange} value={credentials.password}></input>
                <h6>Confirm Password</h6>
                <input type='password' placeholder='Please enter your password' name="rePassword" className='form-control w-100' onChange={handleInputChange} value={credentials.rePassword}></input>
                <div className='text-danger mt-3'>
                    {errorMsg}
                </div>
                <div>
                    <button onClick={handleSubmit} className='btn btn-block btn-success mt-4 mb-2 w-100' style={{ width: "500px" }}>Change password</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;