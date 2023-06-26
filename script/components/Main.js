class Main {
    constructor() {
        this.elem = document.createElement('main');
        this.routeHandler = this.routeHandler.bind(this);
    }

    async routeHandler() {
        this.elem.innerHTML = '';
        let hash = window.location.hash.slice(1);
        if (!hash) hash = 'Home';
        console.log(hash);

        const component = await import(`../pages/${hash}.js`);
        console.log(component);
        let item = new component.default().init();
        this.elem.append(item);
    }

    router() {
        window.addEventListener('hashchange', this.routeHandler);
        window.addEventListener('DOMContentLoaded', this.routeHandler);
    }

    init() {
        this.router();
        return this.elem;
    }
}

export default Main;