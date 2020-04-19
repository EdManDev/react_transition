import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Pages Imported
import Home from "../components/pages/home";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import NotFound from "../components/pages/notfound";
import "./styles.css";

import Navbar from "./pages/Layout/Navbar";

class Routes extends Component {
	render() {
		const routes = [
			{ path: "/", name: "Home", Component: Home },
			{ path: "/about", name: "About", Component: About },
			{ path: "/contact", name: "Contact", Component: Contact },
		];
		return (
			<div>
				<Navbar />
				<section>
					{routes.map(({ path, Component }) => (
						<Route key={path} exact path={path}>
							{({ match }) => (
								<CSSTransition
									in={match != null}
									timeout={300}
									classNames="page"
									unmountOnExit
								>
									<div className="page">
										<Component />
									</div>
								</CSSTransition>
							)}
						</Route>
					))}
				</section>
			</div>
		);
	}
}

export default Routes;
