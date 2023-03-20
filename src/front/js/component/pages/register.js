import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from "/workspace/Waves/src/front/img/bg.jpg";

export const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register completed successfully.')
        navigate('/login');
    }

    return(
        <div className = "register text-center" style = {{height: '85.5vh',backgroundImage: `url(${Image})`,  backgroundSize: 'cover'}}>
            <h1 style = {{color: 'white', paddingTop: '75px'}}>Sign Up</h1>
                <div className = "container" style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <input type = "username" placeholder='Username' style = {{width: '50%', padding: "12px 20px", margin: "8px 0", border: "1px solid #ccc", boxSizing: "border-box", borderRadius: '15px'}} value = {username} onChange = {handleUsernameChange} required/>
                    <input type = "email" placeholder = 'Email'  style = {{width: '50%', padding: "12px 20px", margin: "8px 0", border: "1px solid #ccc", boxSizing: "border-box", borderRadius: '15px'}}  value = {email} onChange = {handleEmailChange} required/>
                    <input type = "password" placeholder = 'Password' style = {{width: '50%', padding: "12px 20px", margin: "8px 0", border: "1px solid #ccc", boxSizing: "border-box", borderRadius: '15px'}} value = {password} onChange = {handlePasswordChange} required/>
                    <button type = 'submit' style = {{backgroundColor: '#f20cf1', color: 'white',cursor: "pointer", borderRadius: "15px", border: "none", padding: "14px 20px", margin: "8px 0" }} onSubmit={handleSubmit}>Register</button>
                </div>
        </div>
    );
};
