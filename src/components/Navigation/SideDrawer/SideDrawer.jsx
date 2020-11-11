import classes from "./SideDrawer.module.css";
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const SideDrawer = (props) => {
	let attachedClasses = [classes.Close, classes.SideDrawer];

	if (props.open) {
		attachedClasses = [classes.Open, classes.SideDrawer];
	}

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.close} />
			<div className={attachedClasses.join(" ")}>
				<div class={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems></NavigationItems>
				</nav>
			</div>
		</Aux>
	);
};

export default SideDrawer;
