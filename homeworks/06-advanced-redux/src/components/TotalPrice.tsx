import React from "react";
import {PizzaPrice} from "./PizzaPrice";
import {useSelector} from 'react-redux'
import {RootState} from "../store/reducers/rootReducer";

export function TotalPrice() {
	const price = useSelector((state: RootState) => {
		return state.pizzaBasket.total
	})

	return (
		<div className="flex">
			<span>Total price:</span><PizzaPrice price={price}/>
		</div>
	);
}
