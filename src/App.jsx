import './styles/common.scss';
import './styles/reset.scss';

function App() {
  return (
    <div className="wrapper">
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
      <div className="content">
        <div className="content__top">
          <h3 className="content__title title">Все кроссовки</h3>
          <div className="search-block">
            <input className='search-block__input' type="text" placeholder='Поиск...' />
          </div>
        </div>
        <div className="content__inner">
          <div className="card">
            <div className="card__favorite"></div>
            <img width={133} height={112} src="/img/goods/1.png" alt="image" />
            <p className="card__text">
              Мужские Кроссовки Nike Air Max 270
            </p>
            <div className="card__inner">
              <div className="card__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div className="card__addCart">
                <img src="/img/icons/plus.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
