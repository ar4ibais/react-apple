import './styles/common.scss';
import './styles/reset.scss';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Favorites from './pages/Favorites';
import AppContext from './context'


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const cartResponse = await axios.get('https://65477eb0902874dff3ac6148.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://654b44fb5b38a59f28eec71e.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://65477eb0902874dff3ac6148.mockapi.io/items')

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      axios.delete(`https://65477eb0902874dff3ac6148.mockapi.io/cart/${obj.id}`)
    } else {
      axios.post('https://65477eb0902874dff3ac6148.mockapi.io/cart', obj)
      setCartItems(prev => [...prev, obj])
    }
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

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      onAddToFavorite,
      setCartOpened,
      setCartItems,
      cartItems
    }}>
      <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route path='/' element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          } exact />
          <Route path='/favorites' element={
            <Favorites />
          } />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;