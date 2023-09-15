import styles from './Nav.module.scss'

function Nav({ dark }) {
	return (
		<nav className={dark ? styles.navigationDark : styles.navigation}>
			<img
				src={dark ? 'img/coffee-beansBlack.svg' : 'img/coffee-beansWhite.svg'}
				alt="coffeLogo"
			/>
			<ul className={styles.navigation__links}>
				<li className={styles.navigation__link}>Coffee house</li>
				<li className={styles.navigation__link}>Our coffee</li>
				<li className={styles.navigation__link}>For your pleasure</li>
			</ul>
		</nav>
	)
}

export default Nav
