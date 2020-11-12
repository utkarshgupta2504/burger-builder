import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
	let ingredients = Object.keys(props.ingredients)
		.map((igKey) => {
			return [...Array(props.ingredients[igKey])].map((_, index) => {
				return (
					<BurgerIngredient key={igKey + index} type={igKey}></BurgerIngredient>
				);
			});
		})
		.reduce((arr, el) => arr.concat(el), []);

	if (ingredients.length === 0) {
		ingredients = <p>Please start adding ingredients</p>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top"></BurgerIngredient>
			{ingredients}
			<BurgerIngredient type="bread-bottom"></BurgerIngredient>
		</div>
	);
};

export default Burger;
