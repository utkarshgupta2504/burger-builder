import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>
			Current Price: <strong>{props.price.toFixed(2)}$</strong>
		</p>
		{controls.map((ctrl) => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				addIngredient={() => props.addIngredient(ctrl.type)}
				removeIngredient={() => props.removeIngredient(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			></BuildControl>
		))}
		<button
			className={classes.OrderButton}
			disabled={!props.canOrder}
			onClick={props.ordered}
		>
			ORDER NOW
		</button>
	</div>
);

export default BuildControls;
