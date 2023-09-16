// import axios from 'axios'

import Home from '../Home/Home'
import CoffeLine from '../CoffeLine/CoffeLine'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'

// import {bd} from '../bd'
import { arrBest } from '../bdBest'
import styles from './App.module.scss'

function App() {
	return (
		<div className="wrapper">
			<h1>Coffee house</h1>
			<Header></Header>

			<Home bd={arrBest}></Home>

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
