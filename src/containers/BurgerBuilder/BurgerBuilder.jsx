import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
	};

	addIngredientHandler = (type) => {
		const newIngredients = {
			...this.state.ingredients,
		};

		newIngredients[type] = this.state.ingredients[type] + 1;

		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({ ingredients: newIngredients, totalPrice: newPrice });
	};

	removeIngredientHandler = (type) => {
		const newIngredients = {
			...this.state.ingredients,
		};

		newIngredients[type] = Math.max(0, this.state.ingredients[type] - 1);

		const newPrice =
			this.state.totalPrice -
			(this.state.ingredients[type] > 0 ? INGREDIENT_PRICES[type] : 0);

		this.setState({ ingredients: newIngredients, totalPrice: newPrice });
	};

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
				></BuildControls>
			</Aux>
		);
	}
}

export default BurgerBuilder;
