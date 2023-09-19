import { Link } from 'react-router-dom'

import styles from './Nav.module.scss'

function Nav({ dark }) {
	return (
		<nav className={dark ? styles.navigationDark : styles.navigation}>
			<img
				src={dark ? 'img/coffee-beansBlack.svg' : 'img/coffee-beansWhite.svg'}
				alt="coffeLogo"
			/>
			<ul className={styles.navigation__links}>
				<li className={styles.navigation__link}>
					<Link to="/">Coffee house</Link>
				</li>
				<li className={styles.navigation__link}>
					<Link to="/ourCoffee">Our coffee</Link>
				</li>
				<li className={styles.navigation__link}>For your pleasure</li>
			</ul>
		</nav>
	)
}

export default Nav
