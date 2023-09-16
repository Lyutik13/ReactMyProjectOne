import styles from './Card.module.scss'

function Card({ imageUrl, name, price }) {
	return (
		<div className={styles.card}>
			<div className={styles.card__imgWrapper}>
				<img
					className={styles.card__img}
					src={imageUrl}
					alt="imgCoffee"
				/>
			</div>
			<h5>{name}</h5>
			<b>{price}$</b>
		</div>
	)
}

export default Card
