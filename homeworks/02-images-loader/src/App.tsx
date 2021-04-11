import React, {Component} from 'react'
import api from "./utils/api"
import styles from './App.module.css'

type AppState = {
	arrOfImg: {alt_description: string, height: number, urls: {}, width: number}[],
}

export default class App extends Component<{}, AppState> {
	state = {
		arrOfImg: [],
	}

	async componentDidMount() {
		try {
		const result: {data: {alt_description: string, height: number, urls: {}, width: number}[]} = await api.get('/photos/random', {params:{count: 30}})
			this.setState({arrOfImg: result.data})
		} catch (e) {
			alert(e.message)
		}
	}

	render() {
		const {arrOfImg} = this.state;
		return (
			<div className={styles.app}>
				<div className={styles.searchPanel}>
					<input type="text" className={styles.search}/>
					<button className="btn">search</button>
				</div>
				<body className={styles.imagesContainer}>
				{arrOfImg.length > 0 ? arrOfImg.map((curImg, idx) => {
					return (
						<div
							key={idx}
							className={styles.imageBlock}
							style={{
								width: `${curImg['width']*168/curImg['height']}px`,
							  flexGrow: +`${curImg['width']*168/curImg['height']}`
							}}>
							<i style={{paddingBottom: `${curImg['height']/curImg['width']*100}%`}}></i>
							<img src={curImg['urls']['regular']} alt={curImg['alt_description']} />
						</div>
					)})
					:
					null
				}
				</body>
			</div>
		);
	}
}
