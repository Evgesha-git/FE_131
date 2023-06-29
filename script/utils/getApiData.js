// @ts-check

const getData = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    if (resp.ok) {
        let data = await resp.json();
        return data;
    }
}

export { getData };