import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import Icon from '../icon/Icon'


function Header () {
    return(
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <Subtitle>Criado por William dos Santos Machado</Subtitle>
            <div className={styles.iconContent}>
                <Icon iconName="github" link="https://github.com/dohillo2021" />
            </div>
        </div>
    )
}

export default Header