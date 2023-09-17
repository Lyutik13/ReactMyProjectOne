import React from 'react'
import axios from 'axios'

import Home from '../Home/Home'
import CoffeLine from '../CoffeLine/CoffeLine'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'

// import {bd} from '../bd'
// import { arrBest } from '../bdBest'
import styles from './App.module.scss'

function App() {
	const [itemsBest, setItemsBest] = React.useState([])
	// const [itemsOll, setItemsOll] = React.useState([])

	React.useEffect(() => {
		async function fetcData() {
			const itemsResponse = await axios.get(
				'https://65043c13c8869921ae24bc9d.mockapi.io/best'
			)

			setItemsBest(itemsResponse.data)
		}
		fetcData()
	}, [])

	return (
		<div className="wrapper">
			<h1>Coffee house</h1>
			<Header></Header>

			<Home bd={itemsBest}></Home>

			<footer className={styles.footer}>
				<div className="container">
					<Nav dark={true}></Nav>
					<div className={styles.pt10}>
						<CoffeLine dark={true}></CoffeLine>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
