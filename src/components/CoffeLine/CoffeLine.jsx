import styles from './CoffeLine.module.scss'

function CoffeLine({dark}) {
  return (
    <div className={styles.coffeLine}>
      <div className={dark ? styles.coffeLine__dark : styles.coffeLine__white}></div>
      <img src={dark ? 'img/lineDark.svg' : 'img/lineWhite.svg'} alt="CoffeLine" />
      <div className={dark ? styles.coffeLine__dark : styles.coffeLine__white}></div>
    </div>
  )
}

export default CoffeLine