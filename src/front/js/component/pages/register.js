import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from "/workspace/Waves/src/front/img/bg.jpg";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Register completed successfully.')
        const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          };
            const resp = await fetch(
                "https://3001-plum-stork-z1tdvn7405n.ws-us90.gitpod.io/api/register",
                opts
            )
            if (resp.status >= 300){ 
                alert("There has been some error");
                return false;
            }
            const data = await resp.json();
        navigate('/login');
}

    return(
        <div className = "register text-center" style = {{height: '85.5vh',backgroundImage: `url(${Image})`,  backgroundSize: 'cover'}}>
            <h1 style = {{color: 'white', paddingTop: '75px'}}>Sign Up</h1>
                <form className = "container" style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}} onSubmit={handleSubmit}>
                    <input type = "email" placeholder = 'Email'  style = {{width: '50%', padding: "12px 20px", margin: "8px 0", border: "1px solid #ccc", boxSizing: "border-box", borderRadius: '15px'}} value = {email} onChange = {handleEmailChange} required/>
                    <input type = "password" placeholder = 'Password' style = {{width: '50%', padding: "12px 20px", margin: "8px 0", border: "1px solid #ccc", boxSizing: "border-box", borderRadius: '15px'}} value = {password} onChange = {handlePasswordChange} required/>
                    <a href = '/login'>
                        <button type = 'submit' style = {{backgroundColor: '#f20cf1', color: 'white', cursor: "pointer", borderRadius: "15px", border: "none", padding: "14px 20px", margin: "8px 0" }} >Register</button>
                    </a>
                </form>
        </div>
    );
};
