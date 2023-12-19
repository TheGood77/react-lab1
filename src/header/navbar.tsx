import styles from './navbar.module.scss'


export default interface INavigationItem {
    text: string;
    onClick?: Function;
    active?: boolean;
  }
  

const Navigation = (props: {
    logoText: string,
    items: INavigationItem[],
}) => {

    const renderItems = () => {
        return props.items.map((item, index) => <a key={`navigation_${index}`} href='#!'
                                                   className={item.active ? styles.active : ''}>{item.text}</a>)
    }

    return <nav className={styles.nav}>
        <div className={styles.logoContainer}>
            <div className={styles.logo}>{'T'}</div>
            {props.logoText}
        </div>

        <div className={styles.links}>
            {renderItems()}
        </div>
    </nav>
}

export { Navigation };
