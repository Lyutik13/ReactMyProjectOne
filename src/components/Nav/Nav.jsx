import { Link } from 'react-router-dom'

import beansBlackImg from '../../resources/img/coffee-beansBlack.svg'
import beansWhiteImg from '../../resources/img/coffee-beansWhite.svg'
import styles from './Nav.module.scss'

function Nav({ dark }) {
	return (
		<nav className={dark ? styles.navigationDark : styles.navigation}>
			<img
				src={dark ? beansBlackImg : beansWhiteImg}
				alt="coffeLogo"
			/>
			<ul className={styles.navigation__links}>
				<li className={styles.navigation__link}>
					<Link to="/">Coffee house</Link>
				</li>
				<li className={styles.navigation__link}>
					<Link to="/ourCoffee">Our coffee</Link>
				</li>
				<li className={styles.navigation__link}><Link to="/forYourPleasure">For your pleasure</Link></li>
			</ul>
		</nav>
	)
}

export default Nav
