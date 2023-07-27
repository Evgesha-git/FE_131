import { Link } from "react-router-dom";

const Cart = (props) => {
    const { id, title, price, image, description: desc } = props.data;

    return (
        <div className="product_cart">
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
        </div>
    );
};

export default Cart;
