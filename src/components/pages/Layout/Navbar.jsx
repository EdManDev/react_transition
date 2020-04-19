import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
					<div className="container">
						<Link className="navbar-brand" to="/">
							<i className="fas fa-laptop-code" /> Home Logo
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/contact">
										<i className="fas fa-sign-in-alt" /> Contact
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/about">
										<i className="fas fa-sign-in-alt" /> About
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/">
										<i className="fas fa-sign-in-alt" /> Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="*">
										<i className="fas fa-user-plus" /> Register
									</Link>
								</li>
								<li className="nav-item d-none d-sm-block">
									<Link className="nav-link" to="#/">
										|
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="*">
										Browse More
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<label></label>
				<br />
				<br />
				<br />
			</div>
		);
	}
}

export default Navbar;
