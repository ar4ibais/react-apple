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
import Orders from './pages/Orders';


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://65477eb0902874dff3ac6148.mockapi.io/cart'),
          axios.get('https://654b44fb5b38a59f28eec71e.mockapi.io/favorites'),
          axios.get('https://65477eb0902874dff3ac6148.mockapi.io/items')
        ])

        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData()
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://65477eb0902874dff3ac6148.mockapi.io/cart/${findItem.id}`)
      } else {
        const { data } = await axios.post('https://65477eb0902874dff3ac6148.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не получилось добавить в корзину(')
      console.error(error);
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
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      items,
      cartItems,
      favorites,
      isItemAdded,
      onAddToFavorite,
      onAddToCart,
      setCartOpened,
      setCartItems,
      cartItems
    }}>
      <div className="wrapper">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
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
          <Route path='/orders' element={
            <Orders />
          } />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;