import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProduct } from "../utils/getData";

const Product = () => {
    const [product, setProduct] = useState(null);
    const id = useParams();

    useEffect(() => {
        const data = async () => {
            const data = await getProduct(id.id);
            setProduct(data);
        };

        if (!product) {
            data();
        }
    }, [product]);

    return (
        <div className="container">
            {!product && <h2>Loading...</h2>}
            {product && (
                <div className="product__main">
                    <div
                        className="img"
                        style={{
                            width: 400,
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{
                                width: "100%",
                            }}
                        />
                    </div>
                    <span className="ratin">{product.rating.rate}</span>
                    <h2 className="title">{product.title}</h2>
                    <p className="desc">{product.description}</p>
                    <span className="price">{product.price}</span>
                </div>
            )}
        </div>
    );
};

export default Product;
