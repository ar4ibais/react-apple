import './styles/common.scss';
import './styles/reset.scss';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    name: 'iPhone 15 Pro Max',
    src: '/img/goods/2.jfif',
    price: 12999
  },
  {
    name: 'iPhone 14 Pro Max',
    src: '/img/goods/1.jfif',
    price: 12999
  },
  {
    name: 'iPhone 12 Pro Max',
    src: '/img/goods/4.jfif',
    price: 12999
  },
  {
    name: 'iPhone 13 Pro Max',
    src: '/img/goods/3.jfif',
    price: 12999
  },
]

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content__top">
          <h3 className="content__title title">Все телефоны</h3>
          <div className="search-block">
            <input className='search-block__input' type="text" placeholder='Поиск...' />
          </div>
        </div>
        <div className="content__inner">
          {
            arr.map(obj => <Card {...obj} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
