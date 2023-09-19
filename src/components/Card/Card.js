import styles from './Card.module.scss'

function Card({ imageUrl, name, country, price, home }) {
	return (
		<div className={home ? `${styles.home} ${styles.card}` : `${styles.oll} ${styles.card}`}>
			<div className={styles.card__imgWrapper}>
				<img
					className={styles.card__img}
					src={imageUrl}
					alt="imgCoffee"
				/>
			</div>
			<h5>{name}</h5>
			<div className={home ? `${styles.dn}` : `${styles.db}`}>{country}</div>
			<b>{price}$</b>
		</div>
	)
}

export default Card
