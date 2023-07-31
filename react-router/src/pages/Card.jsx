import { useState, useContext, useEffect } from "react";
import { CardContext } from "../App";
import Cart from "../components/Cart";

const Card = () => {
    const { card, setCard } = useContext(CardContext);
    const [cardArr, setCardArr] = useState([]);

    useEffect(() => {
        if (card.size) {
            const keys = card.keys();
            const newCard = [];
            for (let key of keys) {
                newCard.push(card.get(key));
            }
            setCardArr(newCard);
        }
    }, [JSON.stringify(cardArr), card]);

    return (
        <div className="container">
            <h2 className="title">Корзина</h2>
            {!cardArr.length && <h2>Корзина пуста</h2>}
            {!!cardArr.length &&
                cardArr.map((item, i) => (
                    <Cart key={i.toString()} data={item} />
                ))}
        </div>
    );
};

export default Card;
