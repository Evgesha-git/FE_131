// @ts-check
import { getData } from "../utils/getApiData.js";
import ProductCart from "../components/ProductCart.js";

export default class Catalog {
    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('catalog');
    }

    async render() {
        /**@type {any[]}*/
        const data = await getData();
        console.log(data);
        data.map(item => {
            return new ProductCart(item);
        }).forEach(cart => {
            this.elem.append(cart.init());
        });
    }

    init() {
        this.render();
        return this.elem;
    }
}

