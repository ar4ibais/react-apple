import { useContext } from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Favorites = () => {
    const { favorites, onAddToFavorite } = useContext(AppContext);
    return (
        <div className="content">
            <div className="content__top">
                <h3 className="content__title title">Мои закладки</h3>
            </div>
            <div className="content__inner">
                {
                    favorites.map((item, index) => (
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