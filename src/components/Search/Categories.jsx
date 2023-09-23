import styles from './Search.module.scss'

function Categiries({ value, onClickCategiry }) {

	const categiries = ['Oll', 'Brazil', 'Kenya', 'Columbia']

	return (
		<div className={styles.search__btns}>
			{categiries.map((categoryName, i) => (
				<button
					key={i}
					onClick={() => onClickCategiry(i)}
					className={value === i ? `${styles.activeBtn}` : ''}
				>
					{categoryName}
				</button>
			))}
		</div>
	)
}

export default Categiries