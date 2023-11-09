import Card from "../components/Card";

const Favorites = ({ items, onAddToFavorite }) => {
    return (
        <div className="content">
            <div className="content__top">
                <h3 className="content__title title">Мои закладки</h3>
            </div>
            <div className="content__inner">
                {
                    items.map((item, index) => (
                        <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Favorites;