import React from "react";
import Link from "react-router-dom";
import { useContext } from "react";

export const Login = () => {
  // const { store, actions } = useContext(Context);

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <form
        action="action_page.php"
        method="post"
        style={{ border: "3px solid #f1f1f1" }}
      >
        <div
          className="imgcontainer"
          style={{ textAlign: "center", margin: "24px 0 12px 0" }}
        >
          <img
            src=""
            alt="Avatar"
            className="avatar"
            style={{ width: "40%", borderRadius: "50%" }}
          />
        </div>
        <div className="container" style={{ padding: "16px" }}>
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="uname"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="psw"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#04aa6d",
              color: "white",
              padding: "14px 20px",
              margin: "8px 0",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Login
          </button>
          <label>
            <input type="checkbox" checked="checked" className="remember" />{" "}
            Remember me
          </label>
        </div>
        <div className="container" style={{backgroundColor: '#f1f1f1'}}>
          <button
            type="button"
            className="cancelbtn"
            style={{
              width: "auto",
              padding: "10px 18px",
              backgroundColor: "#f44336",
            }}
          >
            Cancel
          </button>
          <span className="psw" style={{ float: "right", paddingTop: "16px" }}>
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};
