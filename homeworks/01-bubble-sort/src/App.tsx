import React, {Component} from 'react'
import Button from "./components/button/Button"
import Column from "./components/column/Column"
import './App.css'

type AppState = {
  statusOfGame: StatusOfGame,
  statusOfBtn: StatusOfBtn,
  arrOfNumbers: number[],
  arrOfTimerID: number[],
  disabled: boolean,
}

enum StatusOfGame {
  NOT_SOLVED = 'not solved',
  SOLVED = 'solved'
}

enum StatusOfBtn {
  START = 'start',
  STOP = 'stop'
}

class App extends Component<{}, AppState> {
  private timerID: any
  state = {
    statusOfGame: StatusOfGame.NOT_SOLVED,
    statusOfBtn: StatusOfBtn.START,
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

  makeArr = (): number[] => [...Array(Math.floor(Math.random() * 40))].map(el => el = Math.floor(Math.random() * 100))

  start = (): void => {
    const {arrOfTimerID, statusOfBtn} = this.state
    arrOfTimerID.forEach(el => clearTimeout(el))
    this.setState({
      statusOfBtn: statusOfBtn === StatusOfBtn.START ? StatusOfBtn.STOP : StatusOfBtn.START,
      disabled: false
    })
    if (statusOfBtn === StatusOfBtn.START) {
      this.bubbleSort()
    }
  }

  set = (): void => {
    const {arrOfTimerID} = this.state
    arrOfTimerID.forEach(el => clearTimeout(el))
    this.setState({
      arrOfNumbers: this.makeArr(),
      statusOfGame: StatusOfGame.NOT_SOLVED,
      statusOfBtn: StatusOfBtn.START,
      disabled: false
    })
  }

  bubbleSort = (): void => {
    const arrOfNum: number[] = [...this.state.arrOfNumbers]
    let arrOfTimerID: number[] = [];
    let resArr: number[] = [];
    let flagChange: boolean = false;
    let count: number = 0
    for (let i = 0; i < arrOfNum.length - 1; i++) {
      for (let j = 1; j < arrOfNum.length - i; j++) {
        if (arrOfNum[j - 1] > arrOfNum[j]) {
          count++
          let temp = arrOfNum[j]
          arrOfNum[j] = arrOfNum[j - 1]
          arrOfNum[j - 1] = temp
          resArr = [...arrOfNum]
          flagChange = true;
          this.timerID = setTimeout(((result, curTimerID) => {
            return () => {
              this.setState({arrOfNumbers: result})
              if (this.timerID === curTimerID + 1 || result.length <= 2) {
                this.setState({
                  statusOfGame: StatusOfGame.SOLVED,
                  disabled: true,
                  statusOfBtn: StatusOfBtn.START
                })
              }
            }
          })(resArr, this.timerID), 300 * count)
          arrOfTimerID.push(this.timerID)
        }
      }
    }
    if (!flagChange) {
      this.setState({
        statusOfGame: StatusOfGame.SOLVED,
        disabled: true,
        statusOfBtn: StatusOfBtn.START
      })
    }
    this.setState({arrOfTimerID})
  }

  render() {
    const {statusOfGame, statusOfBtn, arrOfNumbers, disabled} = this.state
    return (
      <div className="App">
        <h1 className="header">Bubble sort</h1>
        <main>
          <div className="container">
            {arrOfNumbers.map((el, idx) => {
              return <Column key={idx} size={el}/>
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
