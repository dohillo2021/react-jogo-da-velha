<<<<<<< HEAD
import styles from './Button.module.css'

function Button ({children, onClick, disabled} ) {
  return(
    <button 
    className={styles.button} 
    onClick={onClick}
    disabled={disabled}
    >
      { children }
    </button>
  )
}

=======
import styles from './Button.module.css'

function Button ({children, onClick, disabled} ) {
  return(
    <button 
    className={styles.button} 
    onClick={onClick}
    disabled={disabled}
    >
      { children }
    </button>
  )
}

>>>>>>> 4cbb130b0552613fb51d0139b295f4773abae726
export default Button