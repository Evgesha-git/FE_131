// @ts-check
import { addToCart, getItemState, removeItem, addCount } from "../pages/Cart.js";

class ProductCart {
    /**
     * @param {any} data 
     * @param {boolean} [mode] 
     */
    constructor(data, mode) {
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
        let button = this.buttonBlock();
        title.append(link);
        desc.innerText = this.data.description;
        link.setAttribute('href', `#Product_${this.data.id}`);
        // link.setAttribute('target', '_blank');
        link.innerText = this.data.title;
        price.innerText = this.data.price;
        img.setAttribute('src', this.data.image);
        image.classList.add('img');
        linkImg.setAttribute('href', `#Product_${this.data.id}`);
        linkImg.append(img);
        image.append(linkImg);
        this.item.append(image, title, desc, price, button);
    }

    buttonBlock() {
        let buttons = document.createElement('div');
        buttons.classList.add('buttons');


        let countBlock = document.createElement('div');
        let buttonMas = document.createElement('button');
        let buttonMin = document.createElement('button');
        let counter = document.createElement('div');
        if (!getItemState(this.data.id)) {
            countBlock.classList.add('hide');
        }
        counter.innerHTML = '1';

        buttonMas.innerHTML = '+';
        buttonMin.innerHTML = '-';

        buttonMas.addEventListener('click', () => {
            counter.innerHTML = addCount(this.data.id, true);
        });
        buttonMin.addEventListener('click', () => {
            counter.innerHTML = addCount(this.data.id, false);
        });
        countBlock.append(buttonMas, counter, buttonMin);


        let button = document.createElement('button');
        button.innerText = `${!getItemState(this.data.id) ?
            'Add to cart' :
            'Remove'}`;
        button.addEventListener('click', () => {
            if (getItemState(this.data.id)) {
                removeItem(this.data.id);
                countBlock.classList.add('hide');
                button.innerText = 'Add to cart';
            } else {
                addToCart(this.data);
                countBlock.classList.remove('hide');
                button.innerText = 'Remove';
            }
        });

        buttons.append(countBlock, button);

        return buttons;
    }

    init() {
        this.render();
        return this.item;
    }
}

export default ProductCart;