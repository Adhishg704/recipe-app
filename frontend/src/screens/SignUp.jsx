import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            const response = await fetch("http://localhost:5000/recipe-app/api/v1/user/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, rePassword: credentials.rePassword })
            });
            const json = await response.json();
            if(json.user) {
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
        <div className="full min-vw-100 d-flex row w-100">
            <div className="text-light left text-start w-50 ms-5 col-sm">
                <h1 className='mb-3 pt-3'>Sign Up</h1>
                <h6>Username</h6>
                <input className="form-control inp" placeholder='Enter your username' onChange={handleInputChange} type='text' required name="name" value={credentials.name}></input>
                <h6>Email Address</h6>
                <input className="form-control inp" placeholder='Enter your email address' onChange={handleInputChange} type='email' name="email" value={credentials.email}></input>
                <h6>Password</h6>
                <input className="form-control inp" placeholder='Enter your Password' type='password' onChange={handleInputChange} name="password" value={credentials.password}></input>
                <h6>Re-Password</h6>
                <input className="form-control inp" placeholder='Re-enter your password' type='password' onChange={handleInputChange} name="rePassword" value={credentials.rePassword}></input>
                <div className="text-danger">
                    {errorMsg}
                </div>
                <button onClick={handleSubmit} className='btn btn-success button'>Sign Up</button>
            </div>
            <div className='text-light text-start col-sm right ms-5 pt-2 me-5'>
                <h1 className='text-warning text-center'>Recipe Finder</h1>
                <h2>
                    <i>"Culinary Exploration Awaits: Embark on a Gastronomic Journey with Our Recipe Finder – Sign Up Today for a World of Flavor!"</i></h2>
                <h3>Tailored to your taste preferences, our algorithm delivers handpicked recipes, ensuring a delightful and personalized cooking experience.</h3>
                <h3>Join a vibrant community of food enthusiasts, share your culinary creations, and engage in discussions with fellow members to elevate your cooking skills together.</h3>
            </div>
        </div>
    )
}
export default SignUp;