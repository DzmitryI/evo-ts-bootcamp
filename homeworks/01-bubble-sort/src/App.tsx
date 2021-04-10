import React, {Component} from 'react'
import Button from "./components/button/Button"
import Column from "./components/column/Column"
import './App.css'

type AppState = {
	statusOfGame: string,
	statusOfBtn: string,
	arrOfNumbers: number[],
	arrOfTimerID: number[],
	disabled: boolean,
}

class App extends Component<{}, AppState> {

  private timerID: any

	state = {
		statusOfGame: 'not solved',
		statusOfBtn: 'Start',
		arrOfNumbers: [],
		arrOfTimerID: [],
		disabled: false,
	}

	componentDidMount() {
		this.setState({arrOfNumbers: this.makeArr()})
	}

	componentWillUnmount() {
		const {arrOfTimerID} = this.state
		arrOfTimerID.forEach(el => clearTimeout(el))
	}

	makeArr = () => [...Array(Math.floor(Math.random() * 40))].map(el => el = Math.floor(Math.random() * 100))

	start = () => {
		const {arrOfTimerID, statusOfBtn} = this.state
		arrOfTimerID.forEach(el => clearTimeout(el))
		this.setState({statusOfBtn: statusOfBtn === 'Start' ? 'Pause' : 'Start', disabled: false})
		if (statusOfBtn === 'Start') {
			this.bubbleSort()
		}
	}

	set = () => {
		const {arrOfTimerID} =this.state
		arrOfTimerID.forEach(el => clearTimeout(el))
		this.setState({arrOfNumbers: this.makeArr(), statusOfGame: 'not solved', statusOfBtn: 'Start', disabled: false})
	}

	bubbleSort = () => {
		const arrOfNum = [...this.state.arrOfNumbers]
		const arrOfTimerID = []
		let resArr = []
		let count = 0
		for(let i = 0;  i < arrOfNum.length - 1;  i++) {
			for(let j = 1;  j < arrOfNum.length - i;  j++) {
				if(arrOfNum[j-1] > arrOfNum[j]) {
					count++
					let temp = arrOfNum[j]
					arrOfNum[j] = arrOfNum[j - 1]
					arrOfNum[j - 1] = temp
					resArr = [...arrOfNum]
					this.timerID = setTimeout((( result, curTimerID) => {
						return () => {
						this.setState({arrOfNumbers : result})
							if (this.timerID === curTimerID + 1 || result.length <= 2) {
								this.setState({statusOfGame: 'solved', disabled: true, statusOfBtn: 'Start'})
							}
						}
					})(resArr, this.timerID), 500 * count)
					arrOfTimerID.push(this.timerID)
				}
			}
		}
		this.setState({arrOfTimerID})
	}

	render() {
		const {statusOfGame, statusOfBtn, arrOfNumbers, disabled} = this.state
		return (
			<div className="App">
				<h1 className="header">
					Bubble sort
				</h1>
				<main>
					<div className="container">
						{arrOfNumbers.map((el, idx) => {
							return <Column key={idx} size={el} />
						})}
					</div>
					<div className="btn-container">
						<Button name='New set' action={this.set} isDisabled={false}/>
						<Button name={statusOfBtn} action={this.start} isDisabled={disabled}/>
					</div>
				</main>
				<footer>
					<span>{`result: ${statusOfGame}`}</span>
				</footer>
			</div>
		)
	}
}

export default App
