const Header = () => {
    return (
        <header className='header'>
            <div className="header__inner">
                <div className="header__logo">
                    <img width={40} height={40} src="/img/logo.svg" alt="logo" />
                    <div className="header__logo-title">
                        <h2>REACT APPLE</h2>
                        <p>Магазин лучших телефонов</p>
                    </div>
                </div>
                <ul className="header__list">
                    <li className='header__list-cart'>
                        <img src="/img/icons/cart.svg" alt="icon" />
                        <span>1205 руб.</span>
                    </li>
                    <li className='header__list-favorites'>
                        <img src="/img/icons/heart.svg" alt="icon" />
                        <span>Закладки</span>
                    </li>
                    <li className='header__list-orders'>
                        <img src="/img/icons/orders.svg" alt="icon" />
                        <span>Профиль</span>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;