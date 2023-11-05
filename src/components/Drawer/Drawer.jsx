import styles from './drawer.module.scss';

const Drawer = ({ onClose, items = [] }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.drawer__top}>
                    <h3>Корзина</h3>
                    <img onClick={onClose} className={styles.drawer__close} src="/img/icons/btn-close.svg" alt="icon" />
                </div>
                <div className={styles.cart}>
                    {
                        items.map(obj => (
                            <div className={styles.cart__item}>
                                <img width={50} height={70} src={obj.src} alt="image" />
                                <div className="">
                                    <p>{obj.name}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img className={styles.cart__item_close} src="/img/icons/btn-close.svg" alt="icon" />
                            </div>
                        ))
                    }
                </div>
                <div className={styles.drawer__total}>
                    <ul className="drawer__total-list">
                        <li className={styles.drawer__total_item}>
                            <p >Итого: </p>
                            <div></div>
                            <span>21 498 руб.</span>
                        </li>
                        <li className={styles.drawer__total_item}>
                            <p>Налог 5%: </p>
                            <div></div>
                            <span>21 498 руб.</span>
                        </li>
                    </ul>
                    <button className={styles.drawer__total_btn}>
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;