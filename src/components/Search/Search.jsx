import styles from './Search.module.scss'

function Search() {
	return (
		<div className={styles.search}>
			<div className={styles.search__lookiing}>
				<p>Lookiing for</p>{' '}
				<div className={styles.search__block}>
					<input placeholder="start typing here..." />
				</div>
			</div>
			<div className={styles.search__filter}>
				<p>Or filter</p>{' '}
				<div className={styles.search__btns}>
					<button>Brazil</button>
					<button>Kenya</button>
					<button>Columbia</button>
				</div>
			</div>
		</div>
	)
}

export default Search
