<<<<<<< HEAD
import styles from './GameInfo.module.css'

import Icon from '../icon/Icon'

import Button from '../button/Button'


function GameInfo ({currentPlayer, winner, onReset }) {
  const shouldEnableButton = () => {
   if (winner !== 0) return true
  }


  return (
    <div className={styles.gameInfo}>
      {
        winner === 0 &&
          <>
            <h4>Próximo a jogar:</h4> 
              {
                currentPlayer === 1 && <Icon iconName="circle" />
              }
              {
                currentPlayer === -1 && <Icon iconName="x" />
              }
        
        
          </>
      }
      {
        winner !==0 &&
          <>
              <h4> Fim de Jogo! Campeão:</h4>
                  {
                      winner === 1 && <Icon iconName="circle" />
                  }
                  {
                      winner === -1 && <Icon iconName="x" />
                  }
        
          </>
      }
      <Button 
        onClick={onReset}
        disabled={!shouldEnableButton()}
      >
        Reiniciar
      </Button>

    </div>
  )
}

=======
import styles from './GameInfo.module.css'

import Icon from '../icon/Icon'

import Button from '../button/Button'


function GameInfo ({currentPlayer, winner, onReset }) {
  const shouldEnableButton = () => {
   if (winner !== 0) return true
  }


  return (
    <div className={styles.gameInfo}>
      {
        winner === 0 &&
          <>
            <h4>Próximo a jogar:</h4> 
              {
                currentPlayer === 1 && <Icon iconName="circle" />
              }
              {
                currentPlayer === -1 && <Icon iconName="x" />
              }
        
        
          </>
      }
      {
        winner !==0 &&
          <>
              <h4> Fim de Jogo! Campeão:</h4>
                  {
                      winner === 1 && <Icon iconName="circle" />
                  }
                  {
                      winner === -1 && <Icon iconName="x" />
                  }
        
          </>
      }
      <Button 
        onClick={onReset}
        disabled={!shouldEnableButton()}
      >
        Reiniciar
      </Button>

    </div>
  )
}

>>>>>>> 4cbb130b0552613fb51d0139b295f4773abae726
export default GameInfo