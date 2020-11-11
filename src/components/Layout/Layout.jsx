import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
	state = {
		showSideDrawer: true,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerOpenedHandler = () => {
		this.setState({ showSideDrawer: true });
	};

	render() {
		return (
			<Aux>
				<Toolbar openSideDrawer={this.sideDrawerOpenedHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					close={this.sideDrawerClosedHandler}
				/>
				<div>Toolbar, SideDrawer, Backdrop</div>
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
