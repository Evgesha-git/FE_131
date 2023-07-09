// @ts-check
import { getIdData } from "../utils/getApiData.js";
import ProductCart from "../components/ProductCart.js";

class Product{
    constructor(id){
        this.id = id;
        this.item = document.createElement('div');
    }

    async render(){
        const data = await getIdData(this.id);
        let productItem = new ProductCart(data, true).init();
        this.item.append(productItem);
    }

    init(){
        this.render();
        return this.item;
    }
}

export default Product;