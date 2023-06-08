const filter = selector => {
    let elems = document.querySelectorAll(selector);

    const filterHandler = elem => {
        let filterTab = elem.querySelector('.filter');
        if (!filterTab) return;
        let list = elem.querySelector('.list').children;
        if (!list) return;

        const tabHandler = e => {
            const target = e.target;
            if (!target) return;
            let data = '';
            if (target.tagName === 'LI') {
                data = target.dataset.filter;
                if (!data) return;
            }

            [...list].forEach(item => {
                let itemData = item.dataset.filter;
                if (data === 'all') {
                    item.classList.remove('hide');
                } else {
                    if (itemData === data) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });

            [...filterTab.children].forEach(item => {
                if (item === target) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active')
                }
            })
        }

        filterTab.addEventListener('click', tabHandler)
    }

    elems.forEach(elem => filterHandler(elem));
}

filter('.portfolio')