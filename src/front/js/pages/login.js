import React from 'react';
import "/workspace/Waves/src/front/styles/login.css";

export const Login = () => {
    return (
        
        <body>
            <button onClick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
            <div id="id01" className="modal">
                <form className="modal-content animate" action ="/action_page.php" method="post">
                    <div className="imgcontainer">
                        <span onClick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
                        <img src="http://placehold.it/" alt="Avatar" className="Avatar" />
                    </div>
                    <div className="container">
                        <label for="name"><b>Username</b></label>
                        <input type="text" name="username" placeholder="Enter Username" required />
                        <label for="password"><b>Password</b></label>
                        <input type="password" name="password" placeholder="Enter Password" required />
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" name="rememberMe" checked="checked">Remember Me</input>
                        </label>
                    </div>
                    <div className="container" style="background-color:#f1f1f1;">
                        <button type="button" onClick="document.getElementById('id01').style.display = 'none'" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot<a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        </body>
    )
}
