import React from "react";
import Link, { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Image from "/workspace/Waves/src/front/img/bg.jpg";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log("This is your token", store.token);
  const handleClick = () => {
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/profile");

  return (
    <div className="text-center" style = {{height: '85.5vh',backgroundImage: `url(${Image})`,  backgroundSize: 'cover'}}>
      <h1 style = {{color: 'white', paddingTop: '75px'}}>Login</h1>

      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token" + store.token
      ) : (
        <div className="container" style = {{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "50%",
              padding: "12px 20px",
              margin: "8px 0",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              borderRadius: '15px'
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "50%",
              padding: "12px 20px",
              margin: "8px 0",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              borderRadius: '15px'
            }}
            required
          />
          <div className = "button-container" style = {{}}>
            <button
              onClick={handleClick}
              style={{
                backgroundColor: "#04aa6d",
                color: "white",
                padding: "14px 20px",
                margin: "8px 20px",
                border: "none",
                cursor: "pointer",
                width: "30%",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              Login
            </button>
            <a href = '/register'>
            <button style = {{backgroundColor: "red", color: "white", cursor: "pointer", borderRadius: "15px", border: "none", padding: "14px 20px", margin: "8px 0"}}>Sign up here!</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
