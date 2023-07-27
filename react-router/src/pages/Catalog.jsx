import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import Cart from "../components/Cart";

const Catalog = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setProducts(data);
        };

        if (!products) {
            fetchData();
        }
    }, [products]);

    return (
        <div className="contaier">
            <h1>Catalog</h1>
            {!products && <h2>Loading...</h2>}
            {products &&
                products?.map((item, i) => (
                    <Cart key={i.toString} data={item} />
                ))}
        </div>
    );
};

export default Catalog;
