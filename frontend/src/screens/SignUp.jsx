import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

function SignUp() {

    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState("");

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
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
        try {
            const response = await fetch("https://recipe-app-api-six.vercel.app/user/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, rePassword: credentials.rePassword })
            });
            const json = await response.json();
            if (json.user) {
                navigate("/login");
            }
            else {
                setErrorMsg(json.errors[0].msg);
            }


        } catch (error) {
            console.log("Credentials:", credentials);
            console.error("Error:", error);
            if (error.response) {
                console.error("Response data:", await error.response.json());
            }
        }

    }

    return (
        <div className='text-start outerDiv bg-dark min-vh-100 w-100 pe-5'>
            <div className=" ms-2 text-light inner-div" >
                <h1 className='mb-3'>Sign up</h1>
                <h6 >Username</h6>
                <input placeholder='Please enter your username' name="name" className='form-control mb-2 mt-2 w-100' onChange={handleInputChange} value={credentials.name} ></input>
                <h6 >Email</h6>
                <input placeholder='Please enter your email' name="email" className='form-control mb-2 mt-2 w-100 ' onChange={handleInputChange} value={credentials.email} ></input>
                <h6>Password</h6>
                <input type='password' placeholder='Please enter your password' name="password" className='form-control mb-2 mt-2 w-100' onChange={handleInputChange} value={credentials.password} ></input>
                <h6>Re-enter password</h6>
                <input type='password' placeholder='Please enter your password' name="rePassword" className='form-control w-100' onChange={handleInputChange} value={credentials.rePassword} ></input>
                <div className='text-danger mt-3'>
                    {errorMsg}
                </div>
                <div>
                    <button onClick={handleSubmit} className='btn btn-block w-100 btn-success mt-4 mb-2' style = {{width: "500px"}} >Sign up</button>
                </div>
                <div>
                    <p><b>Already have an account ? Login</b></p>
                    <Link className='text-white' to="/login" style={{ textDecoration: "none" }}><button className='btn btn-block w-100 btn-warning mb-3' >Login</button></Link>
                </div>
            </div>
        </div>
    )
}
export default SignUp;