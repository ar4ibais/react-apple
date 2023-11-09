import './styles/common.scss';
import './styles/reset.scss';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://65477eb0902874dff3ac6148.mockapi.io/items')
      .then(res => setItems(res.data))
    axios.get('https://65477eb0902874dff3ac6148.mockapi.io/cart')
      .then(res => setCartItems(res.data))
    axios.get('https://654b44fb5b38a59f28eec71e.mockapi.io/favorites')
      .then(res => setFavorites(res.data))
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://65477eb0902874dff3ac6148.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://65477eb0902874dff3ac6148.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://654b44fb5b38a59f28eec71e.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://654b44fb5b38a59f28eec71e.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
    }
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path='/' element={
          <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />
        } exact />
        <Route path='/favorites' element={
          <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
        } />
      </Routes>
    </div>
  );
}

export default App;