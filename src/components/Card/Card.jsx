import './card.scss';

const Card = ({ name, src, price }) => {
    return (
        <div className="card">
            <div className="card__favorite">
                <img src="/img/icons/heart-unliked.svg" alt="icon" />
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
                <div className="card__addCart">
                    <img src="/img/icons/plus.svg" alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default Card;