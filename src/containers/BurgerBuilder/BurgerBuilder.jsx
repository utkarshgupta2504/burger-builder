import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
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
		canOrder: false,
		purchasing: false,
	};

	updateOrderState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igKey) => ingredients[igKey])
			.reduce((sum, el) => sum + el, 0);

		console.log(sum);

		this.setState({ canOrder: sum > 0 });
	};

	addIngredientHandler = (type) => {
		const newIngredients = {
			...this.state.ingredients,
		};

		newIngredients[type] = this.state.ingredients[type] + 1;

		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({ ingredients: newIngredients, totalPrice: newPrice });

		this.updateOrderState(newIngredients);
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

		this.updateOrderState(newIngredients);
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		alert("You Continue");
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Modal show={this.state.purchasing} hide={this.purchaseCancelHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						purchaseCancelled={this.purchaseCancelHandler}
						purchaseContinued={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					></OrderSummary>
				</Modal>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					canOrder={this.state.canOrder}
					ordered={this.purchaseHandler}
				></BuildControls>
			</Aux>
		);
	}
}

export default BurgerBuilder;
