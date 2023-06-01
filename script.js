const accordeon = selector => {
    let elems = document.querySelectorAll(selector);

    const accordeonHandler = (container) => {
        let li = container.querySelectorAll('li');
        if (!li) return;

        const collapse = target => {
            let parent = target.parentNode;
            if (!parent) return;
            li.forEach(item => {
                if (item !== parent) {
                    let title = item.firstElementChild;
                    let content = item.lastElementChild;
                    title.classList.remove('active');
                    content.classList.remove('active');
                }
            });
        }

        const clickHandler = event => {
            let target = event.target;
            console.log(event);
            if (target.classList.contains('title')) {
                target.classList.toggle('active');
                let content = target.nextElementSibling;
                // console.log(content);
                content.classList.toggle('active');
                collapse(target);
            }
        }

        container.addEventListener('click', clickHandler);
    }

    elems.forEach(item => accordeonHandler(item));
}

accordeon('.accordeon');