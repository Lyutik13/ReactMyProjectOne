import Nav from '../../Nav/Nav'
import CoffeLine from '../../CoffeLine/CoffeLine'
import Card from '../../Card/Card'

import aboutOurGoodsImg from '../../../resources/img/about/aboutOurGoods-min.jpg'
import styles from './forYourPleasure.module.scss'

export const ForYourPleasure = ({ bd }) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<Nav></Nav>
					<h2 className={styles.header__title}>For your pleasure</h2>
				</div>
			</header>

			<main className="main container">
				<section className={styles.aboutOurBeans}>
					<div className={styles.wrapper}>
						<div className={styles.imgWrapper}>
							<img src={aboutOurGoodsImg} alt="aboutOurGoods" />
						</div>
						<div className={styles.aboutOurBeans__block}>
							<h3 className={styles.aboutOurBeans__title}>About our goods</h3>
							<CoffeLine dark={true} />
							<p>
								Extremity sweetness difficult behaviour he of. On disposal of as
								landlord horrible.
							</p>
							<p>
								Afraid at highly months do things on at. Situation recommend
								objection do intention so questions. As greatly removed calling
								pleased improve an. Last ask him cold feel met spot shy want.
								Children me laughing we prospect answered followed. At it went
								is song that held help face.
							</p>
						</div>
					</div>
					<div className="line"></div>

					<div className={styles.aboutOurBeans__cards}>
						{bd.map((obj, index) => (
							<Card
								key={index}
								imageUrl={obj.imageUrl}
								name={obj.name}
								country={obj.country}
								price={obj.price}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	)
}
