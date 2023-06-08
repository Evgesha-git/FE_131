const galery = selector => {
    const elems = document.querySelectorAll(selector);

    const galeryController = elem => {
        const images = elem.querySelector('ul');
        if (!images) return;
        const imgFull = elem.querySelector('.image_container');
        if (!imgFull) return;
        const imgContainer = imgFull.querySelector('.image_max');
        if (!imgContainer) return;
        const close = imgFull.querySelector('.close');
        if (!close) return;

        const imageHandler = e => {
            e.preventDefault();
            let target = e.target;
            if (target.tagName === 'IMG') {
                let data = target.dataset.url;
                if (!data) return;
                let img = document.createElement('img');
                img.setAttribute('src', data);
                img.setAttribute('alt', '#');
                imgContainer.append(img);
                imgFull.classList.add('active')
            }
        }

        images.addEventListener('click', imageHandler);
        close.addEventListener('click', () => {
            imgFull.classList.remove('active');
            imgContainer.innerHTML = '';
        })
    }

    elems.forEach(elem => galeryController(elem));
}

galery('.galery')