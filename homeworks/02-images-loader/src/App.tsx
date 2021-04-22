import React, {Component} from 'react'
import api from "./utils/api"
import ImageBlock from "./components/ImageBlock";
import styles from './App.module.css'

type AppState = {
	arrOfImg: {alt_description: string, height: number, urls: {}, width: number}[],
	query: string,
}

export default class App extends Component<{}, AppState> {
	state = {
		arrOfImg: [],
		query: '',
	}

	 fetchImages = async (url: string, params: {params: {per_page ?: number, query?: string}}): Promise<void> => {
		try {
			const {data}: {data:  {results: {alt_description: string, height: number, urls: {}, width: number}[]}} = await api.get(url, params)
			this.setState({arrOfImg: data.results})
		} catch (e) {
			alert(e.message)
		}
	}

	handleClick = async () => {
		const {query} = this.state;
		await this.fetchImages('/search/photos', {params:{query, per_page: 30}})
	}

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({query: e.currentTarget.value.trim()})
	}

	handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter'){
			const {query} = this.state;
			await this.fetchImages('/search/photos', {params:{query, per_page: 30}})
		}
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
		const {arrOfImg, query} = this.state;
		return (
			<div className={styles.app}>
				<div className={styles.searchPanel}>
					<input
						type="text"
						className={styles.search}
						value={query}
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
					/>
					<button className={styles.btn} onClick={this.handleClick}>search</button>
				</div>
				<ul className={styles.imagesContainer}>
					{ arrOfImg.length > 0 ? arrOfImg.map((curImg, idx) => {
						return (
							<ImageBlock
								alt_description={curImg['alt_description']}
								height={curImg['height']}
								urls={curImg['urls']}
								width={curImg['width']}
							/>
						)})
						:
						null
					}
				</ul>
			</div>
		);
	}
}
