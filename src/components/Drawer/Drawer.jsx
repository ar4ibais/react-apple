const Drawer = () => {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="drawer__top">
                    <h3>Корзина</h3>
                    <img className='drawer__close' src="/img/icons/btn-close.svg" alt="icon" />
                </div>
                <div className="cart">
                    <div className="cart__item">
                        <img width={50} height={70} className='cart__item-image' src="/img/goods/1.jfif" alt="image" />
                        <div className="cart__item-content">
                            <p>iPhone 15 Pro Max</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='cart__item-close' src="/img/icons/btn-close.svg" alt="icon" />
                    </div>
                </div>
                <div className="drawer__total">
                    <ul className="drawer__total-list">
                        <li className="drawer__total-item">
                            <p >Итого: </p>
                            <div></div>
                            <span>21 498 руб.</span>
                        </li>
                        <li className="drawer__total-item">
                            <p>Налог 5%: </p>
                            <div></div>
                            <span>21 498 руб.</span>
                        </li>
                    </ul>
                    <button className='drawer__total-btn'>
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;