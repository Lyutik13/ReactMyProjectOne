import React from 'react'
import AppContext from '../../../context'

import Nav from '../../Nav/Nav'
import CoffeLine from '../../CoffeLine/CoffeLine'
import Search from '../../Search/Search'
import Card from '../../Card/Card'

import aboutOurBeansImg from '../../../resources/img/about/aboutOurBeans-min.jpg'
import styles from './OurCoffee.module.scss'

export const OurCoffee = ({ bd }) => {
	const { searchValue } = React.useContext(AppContext)

	const renderItems = () => {
		const filtredItems =
			bd &&
			bd.filter((item) =>
				item.name.toLowerCase().includes(searchValue.toLowerCase())
			)

		return filtredItems.map((obj, index) => (
			<Card
				key={index}
				imageUrl={obj.imageUrl}
				name={obj.name}
				country={obj.country}
				price={obj.price}
			/>
		))
	}

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<Nav></Nav>
					<h2 className={styles.header__title}>Our Coffee</h2>
				</div>
			</header>

			<main className="main container">
				<section className={styles.aboutOurBeans}>
					<div className={styles.wrapper}>
						<div className={styles.imgWrapper}>
							<img src={aboutOurBeansImg} alt="aboutOurBeans" />
						</div>
						<div className={styles.aboutOurBeans__block}>
							<h3 className={styles.aboutOurBeans__title}>About our beans</h3>
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

					<Search></Search>

					<div className={styles.aboutOurBeans__cards}>{renderItems()}</div>
				</section>
			</main>
		</>
	)
}
