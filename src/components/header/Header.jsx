<<<<<<< HEAD
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

=======
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

>>>>>>> 4cbb130b0552613fb51d0139b295f4773abae726
export default Header