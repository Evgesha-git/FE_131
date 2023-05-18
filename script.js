const toDo = function (selector) {
    let container = document.querySelector(selector);
    let form = container.querySelector('.todo__enter');
    let text = form.querySelector('.text');
    let out = container.querySelector('.todo__out');
    let reset = container.querySelector('.clear');

    const formHandler = event => {
        event.preventDefault();
        console.log(text.value);
        out.append(createToDoItem(text.value));
        text.value = '';
    }

    const createToDoItem = text => {
        let item = document.createElement('div');
        item.classList.add('todo__item');

        let todoText = document.createElement('div');
        todoText.classList.add('todo__text');

        let label = document.createElement('label');

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        let textItem = document.createElement('span');
        textItem.classList.add('input__text');
        textItem.innerText = text;

        label.append(checkbox, textItem);

        let buttons = document.createElement('div');
        buttons.classList.add('buttons');

        let edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerText = 'Edit ToDo';

        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerText = 'Remove ToDo';

        buttons.append(edit, remove);
        todoText.append(label);
        item.append(todoText, buttons);

        remove.addEventListener('click', () => {
            item.remove();
        });

        edit.addEventListener('click', () => {
            textItem.contentEditable = true;
        });

        textItem.addEventListener('keydown', event => {
            if (event.altKey && event.key === 'Enter') {
                textItem.contentEditable = false;
            }
        });

        return item;
    }

    form.addEventListener('submit', formHandler);
    reset.addEventListener('click', () => {
        out.innerHTML = '';
    });
}

toDo('.container');