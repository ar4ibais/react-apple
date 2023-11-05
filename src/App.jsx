import './styles/common.scss';
import './styles/reset.scss';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://65477eb0902874dff3ac6148.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__top">
          <h3 className="content__title title">Все телефоны</h3>
          <div className="search-block">
            <input className='search-block__input' type="text" placeholder='Поиск...' />
          </div>
        </div>
        <div className="content__inner">
          {
            items.map(item => (
              <Card
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={() => console.log('Favorite')}
                {...item}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
