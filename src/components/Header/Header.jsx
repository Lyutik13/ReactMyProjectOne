import Nav from '../Nav/Nav'
import CoffeLine from '../CoffeLine/CoffeLine'

import styles from './Header.module.scss'

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Nav></Nav>
				<h2 className={styles.header__title}>
					Everything You Love About Coffee
				</h2>
				<CoffeLine></CoffeLine>
				<h3 className={styles.p35}>We makes every day full of energy and taste</h3>
				<h3 className={styles.white}>Want to try our beans?</h3>
				<h3 className={styles.white}>I love my ZAYA</h3>
				<button className={styles.btn}>More</button>
			</div>
		</header>
	)
}

export default Header
