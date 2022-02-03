import styles from './GameInfo.module.css'

import Icon from '../icon/Icon'

function GameInfo ({currentPlayer}) {
  return (
    <div className= {styles.gameInfo}>
      <h4>Próximo a jogar:</h4> 
      {
        currentPlayer === 1 && <Icon iconName="circle" />
      }
      {
        currentPlayer === -1 && <Icon iconName="x" />
      }
    </div>
  )
}

export default GameInfo ()