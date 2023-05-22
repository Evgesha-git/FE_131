const tabs = (selector) => {
    let containers = document.querySelectorAll(selector);

    const tabController = (tabContainer) => {
        let buttons = tabContainer.querySelector('.tab__buttons');
        // console.log(!buttons);
        if (!buttons) return;

        let contents = tabContainer.querySelector('.tab__content');
        if (!contents) return;

        const contentChange = (index) => {
            [...contents.children].forEach((item, i) => {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        const buttonsHandler = (event) => {
            let button = event.target;
            console.log(event);
            if (button.tagName === 'LI') {
                [...buttons.children].forEach((elem, i) => {
                    if (elem === button) {
                        elem.classList.add('active');
                        contentChange(i);
                    } else {
                        elem.classList.remove('active');
                    }
                });
            }
        }

        buttons.addEventListener('click', buttonsHandler);
    }

    [...containers].forEach(container => tabController(container));
}

tabs('.tab');

const tooltip = selector => {
    const elems = document.querySelectorAll(selector);

    if (!elems || elems.length === 0) return;

    const tooltipHandler = elem => {
        const createTooltip = event => {
            let target = event.target;
            console.log(target);
            let text = target.dataset.text;
            if (!text) return;

            let tooltipElem = document.createElement('div');
            tooltipElem.classList.add('tooltip__content');
            tooltipElem.innerText = text;
            tooltipElem.style.top = target.offsetHeight + 10 + 'px';

            target.append(tooltipElem);
        }

        const deleteTooltip = event => {
            let target = event.target;
            let children = target.children;

            [...children].forEach(elem => {
                if (elem.classList.contains('tooltip__content')) {
                    elem.remove();
                }
            });
        }

        elem.addEventListener('mouseout', deleteTooltip);
        elem.addEventListener('mouseover', createTooltip);
    }

    [...elems].forEach(elem => tooltipHandler(elem));
}

tooltip('.tooltip');