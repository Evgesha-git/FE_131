const accordeon = (selector: string): void => {
    let elems: NodeList = document.querySelectorAll(selector);

    const accordeonHandler = (container: HTMLElement) => {
        const li: NodeList = container.querySelectorAll('li');
        if (!li) return;

        const collapse = (target: HTMLElement) => {
            let parent: ParentNode = target.parentNode;
            if (!parent) return;
            li.forEach((item: HTMLElement) => {
                if (item !== parent){
                    let title: Element = item.firstElementChild;
                    let content: Element = item.lastElementChild;
                    title.classList.remove('active');
                    content.classList.remove('active');
                }
            });
        }

        const clickHandler = (e: MouseEvent) => {
            let target: HTMLElement = e.target as HTMLElement;
            if (target.classList.contains('title')){
                target.classList.toggle('active');
                let content: Element = target.nextElementSibling;
                content.classList.toggle('active');
                collapse(target);
            }
        }

        container.addEventListener('click', clickHandler);
    }

    elems.forEach((element: HTMLElement) => accordeonHandler(element));
}

accordeon('.accordeon');

