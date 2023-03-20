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
					{/* <img src = "./LOGO.PNG"/> */}
					<span className="h1" img = "./LOGO.PNG" style={{fontSize:'45px', textShadow:'#00FFE0 1px 0 10px', color:'white'}}>Waves</span>
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
			</div>
		</nav>
	);
};
