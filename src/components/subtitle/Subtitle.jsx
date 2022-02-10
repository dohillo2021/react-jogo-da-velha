import styles from './Subtitle.module.css'

function Subtitle ({ children}) {
    return (
      <h6 className={ styles.subtitle }>{ children }</h6>  
    )
}

