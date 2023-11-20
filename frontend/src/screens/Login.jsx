import '../styles/Login.css';
import {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

function Login(){

    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies(["access_token"]);

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
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
            credentials: "include"
        });

        const json = await response.json();
        console.log(json);
        setCookies("access_token", json.token);
        console.log(cookies);
        window.localStorage.setItem("userID", json.user);
        navigate("/");
    }

    return(
        <div className='text-start outerDiv bg-dark min-vh-100 w-100'>
            <div className=" ms-2 text-light inner-div" >
                <h1>Login</h1>
                <h6 >Email</h6>
                <input placeholder='Please enter your email' name = "email" className='form-control mb-2 mt-2 inp' onChange={handleInputChange} value = {credentials.email} ></input>
                <h6>Password</h6>
                <input type='password' placeholder='Please enter your password' name = "password" className='form-control inp' onChange={handleInputChange} value = {credentials.password} ></input>
                <div>
                    <button onClick={handleSubmit} className='btn btn-success mt-4 mb-2 inp' >Login</button>
                </div>
                <div>
                    <p><b>Dont have an account ? Sign Up</b></p>
                    <button className='btn btn-warning mb-3 inp' ><Link to = "/signup" style = {{textDecoration: "none"}}>Sign Up</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Login;