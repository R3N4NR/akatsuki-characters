import Logo from '../../assets/akatsuki_logo.webp'
import styles from './styles.module.scss'
export const Header = () => {

    return(
        <>
        <div className={styles .header}>
        <img src={Logo} alt="logo"/>
        <h1>AKATSUKI CHARACTERS</h1>
        </div>
        </>
    )
}