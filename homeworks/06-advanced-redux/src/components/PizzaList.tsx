import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {types} from "../store/actions/actionsTypes";
import {RootState} from "../store/reducers/rootReducer";
import {getPizza} from "../services/api";
import {PizzaItem} from "./PizzaItem";
import {Loading} from "./Loading";
import {logger} from "../index";

export function PizzaList(): JSX.Element {
	const dispatch = useDispatch()
	const arrPizzas = useSelector((state: RootState) => {
		return state.pizzaList.arrPizzas
	})

	useEffect(() => {
		getPizza()
			.then(pizza => {
				dispatch(logger({type: types.PIZZA_VIEWED, payload: pizza.items}))
			});
	}, [dispatch]);

	const handleAddPizza =
		useCallback((_id: string) => {
			dispatch(logger({type: types.PIZZA_ADDED_INTO_BASKET, payload: {_id, pizzas: arrPizzas}}))
		}, [dispatch, arrPizzas]);
	if (arrPizzas.length === 0) {
		return (<Loading />)
	}
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
