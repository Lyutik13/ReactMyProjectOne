import { Link } from 'react-router-dom'

import bestImg1 from '../../resources/img/card/best1-min.jpg'
import bestImg2 from '../../resources/img/card/best2-min.jpg'
import bestImg3 from '../../resources/img/card/best3-min.jpg'
import notFound from '../../resources/img/card/not_found.jpg'
import styles from './Card.module.scss'

function Card({ imageUrl, name, country, price, home }) {
	return (
		<Link to="/OurCoffeeAbout">
			<div
				className={
					home
						? `${styles.home} ${styles.card}`
						: `${styles.oll} ${styles.card}`
				}
			>
				<div className={styles.card__imgWrapper}>
					<img
						className={styles.card__img}
						src={imageUrl === 1 ? bestImg1 : imageUrl === 2 ? bestImg2 : imageUrl === 3 ? bestImg3 : notFound
						}
						alt="imgCoffee"
					/>
				</div>
				<h5>{name}</h5>
				<div className={home ? `${styles.dn}` : `${styles.db}`}>{country}</div>
				<b>{price}$</b>
			</div>
		</Link>
	)
}

export default Card