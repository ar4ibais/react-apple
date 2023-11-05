import { useState } from 'react';
import './card.scss';

const Card = ({ name, src, price, onPlus, onFavorite }) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({ name, src, price })
        setIsAdded(!isAdded)
    }
    return (
        <div className="card">
            <div className="card__favorite">
                <img src="/img/icons/heart-unliked.svg" alt="icon" onClick={onFavorite} />
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