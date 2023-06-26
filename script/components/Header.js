class Header {
    constructor() {
        this.elem = document.createElement('header');
    }

    render() {
        this.elem.classList.add('header');
        this.elem.innerHTML = `
            <div class="logo">
                <a href="#"><img src="https://via.placeholder.com/50" alt="logo" /></a>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Catalog">Catalog</a></li>
                    <li><a href="#About">About</a></li>
                </ul>
            </nav>
            <div class="cart">
                <a href="#Cart"><span>0</span></a>
            </div>
        `;

    }

    init() {
        this.render();
        return this.elem;
    }
}

export default Header;