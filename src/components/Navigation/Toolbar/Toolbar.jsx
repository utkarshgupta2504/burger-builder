import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>MENU</div>
		<Logo />
		<div>
			<nav>
				<NavigationItems></NavigationItems>
			</nav>
		</div>
	</header>
);

export default Toolbar;
