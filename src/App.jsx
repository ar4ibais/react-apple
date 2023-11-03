import './styles/common.scss';
import './styles/reset.scss';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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

          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
