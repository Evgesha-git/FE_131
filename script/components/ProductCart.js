// @ts-check

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
        this.item.append(image, title, desc, price);
    }

    init() {
        this.render();
        return this.item;
    }
}

export default ProductCart;