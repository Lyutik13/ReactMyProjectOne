import CoffeLine from '../CoffeLine/CoffeLine'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import Card from './Card/Card'

import styles from './App.module.scss'

function App() {
	return (
		<div className="wrapper">
			<Header></Header>
			<h1>Coffee house</h1>
      
			<main className="main">
				<section className={styles.aboutUs}>
					<div className="container">
						<h3>About Us</h3>
						<CoffeLine dark={true}></CoffeLine>
						<p className={styles.aboutUs__pt40}>
							Extremity sweetness difficult behaviour he of. On disposal of as
							landlord horrible. Afraid at highly months do things on at.
							Situation recommend objection do intention so questions. As
							greatly removed calling pleased improve an. Last ask him cold feel
							met spot shy want. Children me laughing we prospect answered
							followed. At it went is song that held help face.
						</p>
						<p>
							Now residence dashwoods she excellent you. Shade being under his
							bed her, Much read on as draw. Blessing for ignorant exercise any
							yourself unpacked. Pleasant horrible but confined day end
							marriage. Eagerness furniture set preserved far recommend. Did
							even but nor are most gave hope. Secure active living depend son
							repair day ladies now.
						</p>
					</div>
				</section>
				<section className={styles.ourBest}>
					<div className="container">
						<h3>Our best</h3>
            <div className={styles.cardWrapper}>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
					</div>
				</section>
			</main>

			<footer className={styles.footer}>
				<div className="container">
					<Nav dark={true}></Nav>
					<div className={styles.pt10}>
						<CoffeLine dark={true}></CoffeLine>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
