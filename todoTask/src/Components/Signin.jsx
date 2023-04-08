import './Signin.css'
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Sign_in(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    async function submit(e){
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users",{
                name: name,
                email: email,
                password: password
            });
            console.log(response);
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", response.data.user.email);
            console.log("Login Successfully");
            navigate("/Home");
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="signInBackground">
            <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
            <label>First name</label>
            <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={name}
                onChange={(e)=>{
                    
                    setName(e.target.value);
                }}
            />
            </div>

            <div className="mb-3">
            <label>Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>{
                    // console.log(e.target.value);
                    setEmail(e.target.value);
                }}
            />
            </div>

            <div className="mb-3">
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e)=>{
                    //console.log(e.target.value);
                    setPassword(e.target.value);
                }}
            />
            </div>

            <div className="d-grid">
            <button type="submit" className="btn-primary" onClick={submit}>
                Sign Up
            </button>
            </div>
            <p className="forgot-password text-right">
            Already registered <a href="/SignUp" >sign in?</a>
            </p>
        </form>
      </div>
    )
}

export default Sign_in;