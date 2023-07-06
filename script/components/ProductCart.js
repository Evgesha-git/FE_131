// @ts-check
import { addToCart, getItemState, removeItem } from "../pages/Cart.js";

class ProductCart {
    constructor(data) {
        this.data = data;
        /**@type {HTMLDivElement} */
        this.item = document.createElement('div');
        this.item.classList.add('product__item');
    }

    render() {
        let title = document.createElement('h2');
        let desc = document.createElement('p');
        let link = document.createElement('a');
        let img = document.createElement('img');
        let image = document.createElement('div');
        let linkImg = document.createElement('a');
        let price = document.createElement('span');
        let button = document.createElement('button');
        title.append(link);
        desc.innerText = this.data.description;
        link.setAttribute('href', `#Product_${this.data.id}`);
        link.innerText = this.data.title;
        price.innerText = this.data.price;
        img.setAttribute('src', this.data.image);
        image.classList.add('img');
        linkImg.setAttribute('href', `#Product_${this.data.id}`);
        linkImg.append(img);
        image.append(linkImg);
        button.innerText = `${!getItemState(this.data.id) ?
            'Add to cart' :
            'Remove'}`;
        button.addEventListener('click', () => {
            if (getItemState(this.data.id)) {
                removeItem(this.data.id);
                button.innerText = 'Add to cart';
            } else {
                addToCart(this.data);
                button.innerText = 'Remove';
            }
        });
        this.item.append(image, title, desc, price, button);
    }

    init() {
        this.render();
        return this.item;
    }
}

export default ProductCart;