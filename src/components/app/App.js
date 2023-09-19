import React from 'react'
import { Route, Routes } from 'react-router'
import axios from 'axios'

import Home from '../pages/Home/Home'
import { OurCoffee } from '../pages/OurCoffee/OurCoffee'
import CoffeLine from '../CoffeLine/CoffeLine'
import Nav from '../Nav/Nav'

// import {bd} from '../bd'
// import { arrBest } from '../bdBest'
import styles from './App.module.scss'

function App() {
	const [itemsBest, setItemsBest] = React.useState([])
	const [itemsOll, setItemsOll] = React.useState([])

	React.useEffect(() => {
		async function fetcData() {
			const itemsResponse = await axios.get(
				'https://65043c13c8869921ae24bc9d.mockapi.io/best'
			)
			const ollResponse = await axios.get(
				'https://65043c13c8869921ae24bc9d.mockapi.io/oll'
			)

			setItemsBest(itemsResponse.data)
			setItemsOll(ollResponse.data)
		}
		fetcData()
	}, [])

	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Home bd={itemsBest} />} />
			</Routes>
      
			<Routes>
				<Route path="/ourCoffee" element={<OurCoffee bd={itemsOll} />} />
			</Routes>
			{/* <Home bd={itemsBest}></Home> */}

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
