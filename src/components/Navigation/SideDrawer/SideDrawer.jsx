import classes from "./SideDrawer.module.css";
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = (props) => {
	return (
		<div className={classes.SideDrawer}>
			<Logo />
			<nav>
				<NavigationItems></NavigationItems>
			</nav>
		</div>
	);
};

export default SideDrawer;
