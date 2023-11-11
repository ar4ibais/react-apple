import { useContext } from 'react';
import './header.scss'

import { Link } from 'react-router-dom';
import AppContext from '../../context';

const Header = ({ onClickCart }) => {
    const { cartItems } = useContext(AppContext);

    const totalPrice = cartItems.reduce((sum, obj) => sum + obj.price, 0)

    return (
        <header className='header'>
            <div className="header__inner">
                <Link to="/">
                    <div className="header__logo">
                        <img width={40} height={40} src="/img/logo.svg" alt="logo" />
                        <div className="header__logo-title">
                            <h2>REACT APPLE</h2>
                            <p>Магазин лучших телефонов</p>
                        </div>
                    </div>
                </Link>
                <ul className="header__list">
                    <li className='header__list-cart' onClick={onClickCart}>
                        <div className="header__list-item">
                            <img src="/img/icons/cart.svg" alt="icon" />
                            <span>{totalPrice} руб.</span>
                        </div>
                    </li>
                    <li className='header__list-favorites'>
                        <Link to="/favorites">
                            <div className="header__list-item">
                                <img src="/img/icons/heart.svg" alt="icon" />
                                <span>Закладки</span>
                            </div>
                        </Link>
                    </li>
                    <li className='header__list-orders'>
                        <div className="header__list-item">
                            <img src="/img/icons/orders.svg" alt="icon" />
                            <span>Профиль</span>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;