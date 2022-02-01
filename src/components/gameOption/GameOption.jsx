import styles from './GameOption.module.css'
<<<<<<< HEAD
import Icon from '../icon/Icon'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px"/>

=======
>>>>>>> a2fecbc6b1fb66e0d52042de0f0479bfbf75e65a

function GameOption ({status}) {
  return (
    <div className={styles.gameOption}>
      {
        status === 1 && <GameIcon iconName="circle" />
      }

      {
        status === -1 && <GameIcon iconName="X" />
      }    
    </div>
  )
}

export default GameOption