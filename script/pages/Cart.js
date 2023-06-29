// @ts-check
import ProductCart from "../components/ProductCart.js";

export default class Cart {
    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('cart');
        this.cart = [];
    }

    render() {
        if (!this.cart.length) {
            this.elem.innerHTML = `
            <h1>Корзина пуста</h1>
            `;
        } else {
            this.elem.innerHTML = '';
            this.cart.map(item => new ProductCart(item))
                .forEach(cartItem => this.elem.append(cartItem.init()));
        }
    }

    widget() {
        let counter = this.cart.length;
        let widgetItem = document.createElement('span');
        widgetItem.innerText = counter.toString();
        return widgetItem;
    }

    init() {
        this.render();
        return this.elem;
    }
}

