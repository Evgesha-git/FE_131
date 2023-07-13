class Footer {
    constructor() {
        this.elem = document.createElement('footer');
    }

    render() {
        this.elem.classList.add('footer');
        this.elem.innerHTML = `<h3>Footer</h3>`;
    }

    init() {
        this.render();
        return this.elem;
    }
}

export default Footer;