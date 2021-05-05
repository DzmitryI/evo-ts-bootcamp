import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {types} from "../store/actions/actionsTypes";
import {RootState} from "../store/reducers/rootReducer";
import {PizzaBasketItem} from "./PizzaBasketItem";

export function PizzaBasket(): JSX.Element {
	const dispatch = useDispatch()
	const {pizzaList, pizzaBasket} = useSelector((state: RootState) => {
		return state
	})

	const handleMinusPizza =
		useCallback((_id: string) => {
			dispatch({type: types.PIZZA_REMOVED_FROM_BASKET, payload: {_id, pizzas: pizzaList.arrPizzas}})
		}, [dispatch, pizzaList.arrPizzas]);

	return (
		<>
			{pizzaBasket.arrBasket.map(p =>
				(<PizzaBasketItem
					_id={p._id}
					onMinus={handleMinusPizza}
					key={p._id}
					price={p.price}
					name={p.name}
					count={p.count}
				/>))}
		</>)
}
