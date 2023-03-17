import { Store } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container" >
				<a href="/" style={{textDecoration:'none'}}>
					<span className="h1" style={{fontSize:'45px', textShadow:'#00FFE0 1px 0 10px', color:'white'}}>Waves</span>
				</a>
				<div className="ml-auto">
					<Link to="/demo" style={{textDecoration:'none', color:'white'}}>
						<span>Equipment</span>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/social" style={{textDecoration:'none', color:'white'}}>
						<span>Social</span>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/profile" style={{textDecoration:'none', color:'white'}}>
						<span>Profile</span>
					</Link>
				</div>
				<div className="ml-auto">
					{ !store.token ?
						<Link to="/login" style={{textDecoration:'none', color:'white'}}>
							<span>Login</span>
						</Link>
						:
						<span style={{textDecoration:'none', color: 'white'}} onClick={() => actions.logout()}>Logout</span>
					}
				</div>
			</div>
		</nav>
	);
};
