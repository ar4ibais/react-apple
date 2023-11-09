import Card from '../components/Card';

const Home = ({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart
}) => {
    return (
        <div className="content">
            <div className="content__top">
                <h3 className="content__title title">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все телефоны'}</h3>
                <div className="search-block">
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        className='search-block__input'
                        type="text"
                        placeholder='Поиск...'
                    />
                    {searchValue && <img onClick={() => setSearchValue('')} className='search-block__close' src="/img/icons/btn-close.svg" alt="icon" />}
                </div>
            </div>
            <div className="content__inner">
                {
                    items
                        .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card
                                key={index}
                                onPlus={(obj) => onAddToCart(obj)}
                                onFavorite={(obj) => onAddToFavorite(obj)}
                                {...item}
                            />
                        ))
                }
            </div>
        </div>
    );
}

export default Home;