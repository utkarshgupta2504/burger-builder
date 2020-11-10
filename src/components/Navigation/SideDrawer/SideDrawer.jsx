import classes from "./SideDrawer.module.css";
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = (props) => {
	return (
		<div className={classes.SideDrawer}>
			<div class={classes.Logo}>
				<Logo />
			</div>
			<nav>
				<NavigationItems></NavigationItems>
			</nav>
		</div>
	);
};

export default SideDrawer;
