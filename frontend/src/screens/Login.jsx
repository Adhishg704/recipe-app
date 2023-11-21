import '../styles/Login.css';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";

function Login() {

    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies(["access_token"]);
    const [errorMsg, setErrorMsg] = useState("");

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
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
        const response = await fetch("http://localhost:5000/recipe-app/api/v1/user/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            credentials: "include"
        });

        const json = await response.json();
        console.log(json);
        if (json.token) {
            setCookies("access_token", json.token);
            console.log(cookies);
            window.localStorage.setItem("userID", json.user);
            navigate("/");
        }
        else {
            setErrorMsg(json.errors[0].msg);
        }
    }

    return (
        <div className='text-start outerDiv bg-dark min-vh-100 w-100 pe-5'>
            <div className=" ms-2 text-light inner-div" >
                <h1 className='mb-3'>Login</h1>
                <h6 >Email</h6>
                <input placeholder='Please enter your email' name="email" className='form-control mb-2 mt-2 w-100' onChange={handleInputChange} value={credentials.email} ></input>
                <h6>Password</h6>
                <input type='password' placeholder='Please enter your password' name="password" className='form-control w-100' onChange={handleInputChange} value={credentials.password}></input>
                <div className='text-danger mt-3'>
                    {errorMsg}
                </div>
                <div>
                    <button onClick={handleSubmit} className='btn btn-block btn-success mt-4 mb-2 w-100' style = {{width: "500px"}}>Login</button>
                </div>
                <div>
                    <p><b>Dont have an account ? Sign Up</b></p>
                    <Link className='text-white' to="/signup" style={{ textDecoration: "none" }}><button className='btn btn-block btn-warning mb-3 w-100' >Sign Up</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Login;