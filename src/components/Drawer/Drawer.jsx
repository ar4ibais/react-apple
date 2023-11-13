import { useContext, useState } from "react";
import Info from "../Info";
import styles from './drawer.module.scss';
import AppContext from "../../context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms)
})

const Drawer = ({ onClose, items = [], onRemove, opened }) => {
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { cartItems, setCartItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post('https://654b44fb5b38a59f28eec71e.mockapi.io/orders', {
                items: cartItems
            })
            axios.put(`https://65477eb0902874dff3ac6148.mockapi.io/cart`, [])
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://65477eb0902874dff3ac6148.mockapi.io/cart/${item.id}`)
                await delay(1000)
            }
        } catch (error) {
            alert('Не удалось добавить orders')
        }
        setIsLoading(false)
    }
    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={`${styles.drawer}`}>
                <div className={styles.drawer__top}>
                    <h3>Корзина</h3>
                    <img onClick={onClose} className={styles.drawer__close} src="/img/icons/btn-close.svg" alt="icon" />
                </div>
                {
                    items.length > 0 ? (
                        <>
                            <div className={styles.cart}>
                                {
                                    items.map((obj, index) => (
                                        <div key={index} className={styles.cart__item}>
                                            <img width={50} height={70} src={obj.src} alt="image" />
                                            <div className="">
                                                <p>{obj.name}</p>
                                                <b>{obj.price} руб.</b>
                                            </div>
                                            <img onClick={() => onRemove(obj.id)} className={styles.cart__item_close} src="/img/icons/btn-close.svg" alt="icon" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={styles.drawer__total}>
                                <ul className="drawer__total-list">
                                    <li className={styles.drawer__total_item}>
                                        <p >Итого: </p>
                                        <div></div>
                                        <span>{totalPrice + totalPrice * 0.05} руб.</span>
                                    </li>
                                    <li className={styles.drawer__total_item}>
                                        <p>Налог 5%: </p>
                                        <div></div>
                                        <span>{(totalPrice * 0.05).toFixed(2)} руб.</span>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className={styles.drawer__total_btn}>
                                    Оформить заказ
                                </button>
                            </div>
                        </>
                    ) : (
                        <Info
                            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                            image={isOrderComplete ? "/img/complete-order.png" : "/img/cart-empty.png"}
                            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Drawer;