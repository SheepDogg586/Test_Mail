import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container" >
				<div className="ml-auto">
					<Link to="/demo" style={{textDecoration:'none', color:'white'}}>
						<span>Equipment</span>
					</Link>
				</div>
				<a href="/" style={{textDecoration:'none'}}>
					<span className="h1" style={{fontSize:'45px', textShadow:'#00FFE0 1px 0 10px', color:'white'}}>Waves</span>
				</a>
				<div className="ml-auto">
					<Link to="/social" style={{textDecoration:'none', color:'white'}}>
						<span>Social</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};
