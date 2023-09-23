import React from 'react'
import { Route, Routes } from 'react-router'
import axios from 'axios'

import AppContext from '../../context'
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
	const [searchValue, setSearchValue] = React.useState('')
	const [activeSearchBtn, setActiveSearchBtn] = React.useState(0)

	React.useEffect(() => {
		async function fetcData() {
			const itemsResponse = await axios.get(
				'https://65043c13c8869921ae24bc9d.mockapi.io/best'
			)
			const ollResponse = await axios.get(
				`https://65043c13c8869921ae24bc9d.mockapi.io/oll?${activeSearchBtn > 0 ? `category=${activeSearchBtn}` : ''}`
			)

			setItemsBest(itemsResponse.data)
			setItemsOll(ollResponse.data)
		}
		fetcData()
	}, [activeSearchBtn])

	return (
		<AppContext.Provider
			value={{ searchValue, setSearchValue, activeSearchBtn, setActiveSearchBtn }}
		>
			<div className="wrapper">
				<Routes>
					<Route path="/" element={<Home bd={itemsBest} />} />
					<Route path="/ourCoffee" element={<OurCoffee bd={itemsOll} />} />
				</Routes>

				<footer className={styles.footer}>
					<div className="container">
						<Nav dark={true}></Nav>
						<div className={styles.pt10}>
							<CoffeLine dark={true}></CoffeLine>
						</div>
					</div>
				</footer>
			</div>
		</AppContext.Provider>
	)
}

export default App

// React Pizza v2 23:57 