const Card = () => {
    return (
        <div className="card">
            <div className="card__favorite">
                <img src="/img/icons/heart-unliked.svg" alt="icon" />
            </div>
            <img className='card__image' width={112} height={133} src="/img/goods/2.jfif" alt="image" />
            <p className="card__text">
                iPhone 15 Pro Max
            </p>
            <div className="card__inner">
                <div className="card__price">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <div className="card__addCart">
                    <img src="/img/icons/plus.svg" alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default Card;