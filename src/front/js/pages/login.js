import React from "react";
import Link, { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log("This is your token", store.token);
  const handleClick = () => {
    actions.login(email, password)
  };

  if (store.token && store.token != "" && store.token != undefined) navigate("/");

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>

      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token" + store.token
      ) : (
        <div className="container">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width:"100%", padding:"12px 20px", margin:"8px 0", display: "inline-block", border:"1px solid #ccc", boxSizing: "border-box", }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width:"100%", padding:"12px 20px", margin:"8px 0", display: "inline-block", border:"1px solid #ccc", boxSizing: "border-box", }}
          />
          <button onClick={handleClick} style={{backgroundColor: "#04aa6d", color: "white", padding: "14px 20px", margin:"8px 0", border:"none", cursor:"pointer", width:"20%", borderRadius: "15px"}}>Login</button>
        </div>
      )}
    </div>
  );

}


