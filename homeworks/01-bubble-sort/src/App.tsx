import React, {Component} from 'react';
import './App.css';
import Button from "./components/button/Button";
import Column from "./components/column/Column";

type AppState = {
	statusOfGame: string,
	arrOfNumbers: number[]
}

class App extends Component<{}, AppState> {

	state = {
		statusOfGame: 'Start',
		arrOfNumbers: []
	}
	componentDidMount() {
		this.setState({arrOfNumbers: this.makeArr()})
	}

	makeArr = () => [...Array(40)].map(el => el = Math.floor(Math.random() * 100));

	start = () => {
		const {statusOfGame} = this.state;
		this.setState({statusOfGame: statusOfGame === 'Start' ? 'Pause' : 'Start'})
	}

	set = () => {
		this.setState({arrOfNumbers: this.makeArr()})
	}

	render() {
		const {statusOfGame, arrOfNumbers} = this.state;
		console.log(statusOfGame, arrOfNumbers)
		return (
			<div className="App">
				<h1 className="header">
					Bubble sort
				</h1>
				<main>
					<div className="container">
						{arrOfNumbers.map(el => {
							return <Column size={el} />
						})}

					</div>
					<div className="btn-container">
						<Button name='New set' action={this.set}/>
						<Button name={statusOfGame} action={this.start}/>
					</div>
				</main>
				<footer>
					<span>result</span>
				</footer>
			</div>
		);
	}
}

export default App;
