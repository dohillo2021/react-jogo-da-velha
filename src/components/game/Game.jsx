<<<<<<< HEAD
import { useState } from 'react'

=======
>>>>>>> a2fecbc6b1fb66e0d52042de0f0479bfbf75e65a
import styles from './Game.module.css'

import GameOption from '../gameOption/GameOption'


function Game() {
    const [gameState, setGameState] = useState(Array(9).fill(0))
    console.log(gameState)
    return(
        <div className={styles.game}>
<<<<<<< HEAD
            {
                gameState.map((value, pos) => 
                <GameOption
                    key={ ` game-option-pos-${pos} `}
                    status={value}
                />)
            }
            
=======
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
>>>>>>> a2fecbc6b1fb66e0d52042de0f0479bfbf75e65a
        </div>
    )
}

export default Game
