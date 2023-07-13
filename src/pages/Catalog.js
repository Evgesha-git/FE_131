// @ts-check
import { getData } from "../utils/getApiData";
import ProductCart from "../components/ProductCart";
import { pagination } from "../utils/pagination";
import './catalog.css';

export default class Catalog {
    constructor() {
        this.wrapper = document.createElement('div');
        this.elem = document.createElement('div');
        this.elem.classList.add('catalog');
        this.page = 1;
        this.data = [];
        this.pagination = document.createElement('div');
        this.pagination.classList.add('pagination');
    }

    async render() {
        this.elem.innerHTML = '';
        if (this.data.length === 0) {
            this.data = await getData();
        }
        let pageCount = 3;
        const [
            pageData,
            page,
            perPageCount,
            changePage,
            setPage
        ] = pagination(this.data, pageCount, this.page);
        this.page = page;
        console.log(this.data);
        pageData.map(item => {
            return new ProductCart(item);
        }).forEach(cart => {
            this.elem.append(cart.init());
        });
        this.createPagination(setPage, changePage, perPageCount);
        this.wrapper.append(this.elem, this.pagination);
    }

    createPagination(setPage, changePage, pageCount) {
        this.pagination.innerHTML = '';
        let next = document.createElement('button');
        next.innerHTML = `&rarr;`;
        let prev = document.createElement('button');
        prev.innerHTML = `&larr;`;
        let pages = document.createElement('div');
        pages.classList.add('pages');
        next.addEventListener('click', () => {
            this.page = changePage(true);
            this.render();
        });
        prev.addEventListener('click', () => {
            this.page = changePage(false);
            this.render();
        });
        this.renderButtons(pages, pageCount, setPage);
        this.pagination.append(prev, pages, next);
    }

    renderButtons(elem, pageCount, fs) {
        elem.innerHTML = '';
        [...Array(pageCount).keys()].forEach(button => {
            let btn = document.createElement('button');
            btn.innerHTML = (button + 1).toString();
            btn.addEventListener('click', () => {
                this.page = fs(button + 1);
                this.render();
            });
            btn.disabled = this.page === button + 1;
            elem.append(btn);
        });
    }

    init() {
        this.render();
        return this.wrapper;
    }
}

