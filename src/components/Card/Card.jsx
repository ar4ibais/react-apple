import { useState, useContext } from 'react';
import ContentLoader from "react-content-loader"
import './card.scss';
import AppContext from '../../context';

const Card = ({ id,
    name,
    src,
    price,
    onPlus = Function.prototype,
    onFavorite,
    favorited = false,
    added = false,
    loading = false
}) => {
    const { isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, name, src, price })
    }

    const onClickFavorite = () => {
        onFavorite({ id, name, src, price })
        setIsFavorite(!isFavorite)
    }
    return (
        <div className="card">
            {
                loading ? <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> : <>
                    <div className="card__favorite">
                        <img src={isFavorite ? "/img/icons/heart-liked.svg" : "/img/icons/heart-unliked.svg"} alt="icon" onClick={onClickFavorite} />
                    </div>
                    <img className='card__image' width={112} height={133} src={src} alt="image" />
                    <p className="card__text">
                        {name}
                    </p>
                    <div className="card__inner">
                        <div className="card__price">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        <img
                            onClick={onClickPlus}
                            className='card__addCart'
                            src={isItemAdded(id) ? "/img/icons/btn-checked.svg" : "/img/icons/plus.svg"}
                            alt="icon"
                        />
                    </div>
                </>
            }
        </div>
    );
}

export default Card;