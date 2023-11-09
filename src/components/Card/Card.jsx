import { useState } from 'react';
import './card.scss';

const Card = ({ id, name, src, price, onPlus = Function.prototype, onFavorite, favorited = false }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, name, src, price })
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({ id, name, src, price })
        setIsFavorite(!isFavorite)
    }
    return (
        <div className="card">
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
                    src={isAdded ? "/img/icons/btn-checked.svg" : "/img/icons/plus.svg"}
                    alt="icon"
                />
            </div>
        </div>
    );
}

export default Card;