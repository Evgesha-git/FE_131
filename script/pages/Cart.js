// @ts-check
import ProductCart from "../components/ProductCart.js";

class Cart {
    constructor() {
        this.elem = document.createElement('div');
        this.elem.classList.add('cart');
        this.cart = [];
        this.widgetItem = document.createElement('a');
        this.addToCart = this.addToCart.bind(this);
        this.widget = this.widget.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.getItemState = this.getItemState.bind(this);
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
        let widgetText = document.createElement('span');
        // widgetText.innerText = counter.toString();
        widgetText.innerText = this.cart.reduce((count, item) => count + item.price, 0);
        this.widgetItem.setAttribute('href', '#Cart');
        this.widgetItem.innerHTML = `
            <span>${counter.toString()}</span> | 
            <span>${this.cart.reduce((count, item) => count + item.price, 0)}</span>
        `;
        // this.widgetItem.append(widgetText);
        return this.widgetItem;
    }

    addToCart(item) {
        if (!item) return;
        if (!this.cart.includes(item)) {
            this.cart.push(item);
        }
        this.widget();
    }

    /**@param {number} id */
    removeItem(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.render();
        this.widget();
    }

    /**@param {number} id */
    getItemState(id) {
        return this.cart.some(item => item.id === id);
    }

    init() {
        this.render();
        return this.elem;
    }
}

const cart = new Cart();
const addToCart = cart.addToCart;
const widget = cart.widget();
const removeItem = cart.removeItem;
const getItemState = cart.getItemState;

export default cart;
export { addToCart, widget, removeItem, getItemState };