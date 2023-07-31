import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CardContext } from "../App";

const Widget = () => {
    const { card } = useContext(CardContext);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (card.size) {
            const keys = card.keys();
            let price = 0;
            for (let key of keys) {
                price += card.get(key).price * card.get(key).count;
            }
            setPrice(price);
        }
    }, [card, JSON.stringify(price)]);

    return (
        <div className="widget">
            <Link to={"/card"}>
                {card.size} | {price}
            </Link>
        </div>
    );
};

export default Widget;
