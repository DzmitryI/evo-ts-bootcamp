import {PizzaItem} from "./PizzaItem";
import React, {useCallback, useEffect} from 'react';
import {types} from "../store/actions/actionsTypes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers/rootReducer";
import {getPizza} from "../services/api";

export function PizzaList(): JSX.Element {
	const dispatch = useDispatch()
	const arrPizzas = useSelector((state: RootState) => {
		return state.pizzaList.arrPizzas
	})

	useEffect(() => {
		getPizza()
			.then(pizza => {
				dispatch({type: types.PIZZA_VIEWED, payload: pizza.items})
			});
	}, [dispatch]);

	const handleAddPizza =
		useCallback((_id: string) => {
			dispatch({type: types.PIZZA_ADDED_INTO_BASKET, payload: {_id, pizzas: arrPizzas}})
		}, [dispatch, arrPizzas]);
	return (
		<>
			{arrPizzas.map(p =>
				(<PizzaItem
					key={p._id}
					_id={p._id}
					name={p.name}
					price={p.price}
					onAdd={handleAddPizza}
				/>))}
		</>
	)

}
