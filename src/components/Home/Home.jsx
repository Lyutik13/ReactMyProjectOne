import CoffeLine from '../CoffeLine/CoffeLine'
import Card from '../Card/Card'

import styles from './Home.module.scss'

function Home({ bd }) {
	return (
		<main className="main">
			<section className={styles.aboutUs}>
				<div className="container">
					<h3>About Us</h3>
					<CoffeLine dark={true}></CoffeLine>
					<p className={styles.aboutUs__pt40}>
						Extremity sweetness difficult behaviour he of. On disposal of as
						landlord horrible. Afraid at highly months do things on at.
						Situation recommend objection do intention so questions. As greatly
						removed calling pleased improve an. Last ask him cold feel met spot
						shy want. Children me laughing we prospect answered followed. At it
						went is song that held help face.
					</p>
					<p>
						Now residence dashwoods she excellent you. Shade being under his bed
						her, Much read on as draw. Blessing for ignorant exercise any
						yourself unpacked. Pleasant horrible but confined day end marriage.
						Eagerness furniture set preserved far recommend. Did even but nor
						are most gave hope. Secure active living depend son repair day
						ladies now.
					</p>
				</div>
			</section>
			<section className={styles.ourBest}>
				<div className="container">
					<h3>Our best</h3>
					<div className={styles.cardWrapper}>
						{bd.map((obj, index) => (
							<Card
								key={index}
								imageUrl={obj.imageUrl}
								name={obj.name}
								price={obj.price}
							/>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
