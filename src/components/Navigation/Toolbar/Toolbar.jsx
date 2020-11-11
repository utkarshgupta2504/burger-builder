import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import DrawerToggle from "./DrawerToggle/DrawerToggle";

const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<DrawerToggle clicked={props.openSideDrawer}></DrawerToggle>
		<Logo height="80%" />
		<nav className={classes.DesktopOnly}>
			<NavigationItems></NavigationItems>
		</nav>
	</header>
);

export default Toolbar;
