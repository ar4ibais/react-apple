import { useContext } from 'react';
import styles from '../Drawer/drawer.module.scss';
import AppContext from '../../context';

const Info = ({ title, image, description }) => {
    const { setCartOpened } = useContext(AppContext);
    return (
        <div className={styles.cart__empty}>
            <img src={image} alt="image" />
            <h3 className={styles.cart__empty_title}>{title}</h3>
            <p className={styles.cart__empty_text}>
                {description}
            </p>
            <button onClick={() => setCartOpened(false)} className={styles.cart__empty_button}>
                Вернуться назад
            </button>
        </div>
    );
}

export default Info;