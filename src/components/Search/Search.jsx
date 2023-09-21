import React from 'react'
import AppContext from '../../context'

import styles from './Search.module.scss'

function Search() {
  const { searchValue,  setSearchValue} = React.useContext(AppContext)

	return (
		<div className={styles.search}>
			<div className={styles.search__lookiing}>
				<div>Lookiing for</div>{' '}
				<div className={styles.search__block}>
					<input
						onChange={(event) => setSearchValue(event.target.value)}
						value={searchValue}
						placeholder="start typing here..."
					/>
				</div>
			</div>
			<div className={styles.search__filter}>
				<div>Or filter</div>{' '}
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
