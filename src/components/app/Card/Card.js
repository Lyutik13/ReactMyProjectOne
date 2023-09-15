import styles from './Card.module.scss'

function Card({ imageUrl, name, price }) {
	return (
		<div className={styles.card}>
			<div className={styles.card__imgWrapper}>
				<img
					className={styles.card__img}
					src="img/card/best3-min.jpg"
					alt="imgCoffee"
				/>
			</div>
			<h5>Solimo Coffee Beans 2 kg</h5>
			<b>15.99$</b>
		</div>
	)
}

export default Card
