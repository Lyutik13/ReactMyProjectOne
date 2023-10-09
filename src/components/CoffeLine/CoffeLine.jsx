import lineDarkImg from '../../resources/img/lineDark.svg'
import lineWhiteImg from '../../resources/img/lineWhite.svg'
import styles from './CoffeLine.module.scss'

function CoffeLine({dark}) {
  return (
    <div className={styles.coffeLine}>
      <div className={dark ? styles.coffeLine__dark : styles.coffeLine__white}></div>
      <img src={dark ? lineDarkImg : lineWhiteImg} alt="CoffeLine" />
      <div className={dark ? styles.coffeLine__dark : styles.coffeLine__white}></div>
    </div>
  )
}

export default CoffeLine