import { useState, useContext, useEffect } from "react";
import { CardContext } from "../App";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import classNames from "classnames";

const Cart = (props) => {
    const { id, title, price, image, description: desc } = props.data;
    const { className } = props;
    const { card, setCard } = useContext(CardContext);
    const [added, setAdded] = useState(false);

    // console.log(classNames);
    const mainClass = classNames(styles.product_cart, className);

    const addToCard = () => {
        const data = {
            ...props.data,
            count: 1,
        };

        let newCard = new Map([...card]);
        newCard.set(id, data);
        setCard(newCard);
        // console.log(card);
        console.log(...newCard);
        setAdded(!added);
    };

    const removeInCard = () => {
        let newCard = new Map([...card]);
        newCard.delete(id);
        setCard(newCard);
        setAdded(!added);
    };

    const productCounter = (direction) => {
        if (!card.get(id)) return;
        const item = card.get(id);
        if (direction) {
            item.count += 1;
        } else {
            if (item.count > 0) {
                item.count -= 1;
            }
        }
        const newCard = new Map([...card]);
        newCard.set(id, item);
        setCard(newCard);
    };

    useEffect(() => {
        if (card.get(id)) {
            setAdded(true);
        }
    }, []);

    return (
        <div className={mainClass}>
            <div
                className="img"
                style={{
                    width: 250,
                }}
            >
                <Link to={`/product/${id}`}>
                    <img
                        style={{
                            width: "100%",
                        }}
                        src={image}
                        alt={title}
                    />
                </Link>
            </div>
            <h2 className="title">
                <Link to={`/product/${id}`}>{title}</Link>
            </h2>
            <p className="desc">{desc}</p>
            <span>{price}</span>
            <div className="buttons">
                {added && (
                    <div className="buttons__added">
                        <div className="counter">
                            <button onClick={() => productCounter(1)}>+</button>
                            <input type="text" value={card.get(id).count} />
                            <button onClick={() => productCounter(0)}>-</button>
                        </div>
                        <button onClick={removeInCard}>Remove</button>
                    </div>
                )}
                {!added && <button onClick={addToCard}>Add to card</button>}
            </div>
        </div>
    );
};

export default Cart;
