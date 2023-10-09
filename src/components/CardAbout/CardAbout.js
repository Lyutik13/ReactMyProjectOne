import CoffeLine from '../CoffeLine/CoffeLine'

import aboutItImg from '../../resources/img/about/aboutIt-min.jpg'
import styles from './CardAbout.module.scss'

function CardAbout({ country, price }) {
	return (
		<main className="main container">
			<section className={styles.aboutOurBeans}>
				<div className={styles.wrapper}>
					<div className={styles.imgWrapper}>
						<img src={aboutItImg} alt="aboutIt-min" />
					</div>
					<div className={styles.aboutOurBeans__block}>
						<h3 className={styles.aboutOurBeans__title}>About it</h3>
						<CoffeLine dark={true} />
						<p>
							<span>Country:</span> Brasil
						</p>
						<p>
							<span>Description:</span> Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
						</p>
						<p>
							<span>Price:</span> <b>16.99$</b>
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default CardAbout
