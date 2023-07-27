export const getData = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    return await resp.json();
}

export const getProduct = async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await resp.json();
}