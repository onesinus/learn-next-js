import Menu from './menu'
import styles from '../../styles/Home.module.css'

export default function Page(props){
    return (
        <main className={styles.main}>
            <Menu />
            {props.content}
        </main>
    )
}