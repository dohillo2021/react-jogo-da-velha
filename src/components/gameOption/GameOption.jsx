<<<<<<< HEAD
import classnames from 'classnames'
import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px"/>


function GameOption ({status, onClick, isWinner}) {
  return (
    <div 
      className={
        classnames(styles.gameOption, {
          [styles.winner]: isWinner
        })
      } onClick={onClick}
      >
      {
        status === 1 && <GameIcon iconName="circle" />
      }

      {
        status === -1 && <GameIcon iconName="X" />
      }    
    </div>
  )
}

=======
import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px"/>


function GameOption ({status, onClick}) {
  return (
    <div className={styles.gameOption} onClick={onClick}>
      {
        status === 1 && <GameIcon iconName="circle" />
      }

      {
        status === -1 && <GameIcon iconName="X" />
      }    
    </div>
  )
}

>>>>>>> 4cbb130b0552613fb51d0139b295f4773abae726
export default GameOption