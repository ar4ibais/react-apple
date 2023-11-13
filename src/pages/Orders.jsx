import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";


const Orders = () => {
    const { onAddToCart, onAddToFavorite } = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://654b44fb5b38a59f28eec71e.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    return (
        <div className="content">
            <div className="content__top">
                <h3 className="content__title title">Мои заказы</h3>
            </div>
            <div className="content__inner">
                {
                    (isLoading ? [...Array(4)] : orders)
                        .map((item, index) => (
                            <Card
                                key={index}
                                onPlus={(obj) => onAddToCart(obj)}
                                onFavorite={(obj) => onAddToFavorite(obj)}
                                loading={isLoading}
                                {...item}
                            />
                        ))
                }
            </div>
        </div>
    );
}

export default Orders;