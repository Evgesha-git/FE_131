const calculate = selector => {
    const container = document.querySelector(selector);
    if (!container) return;
    const out = container.querySelector('.output').firstElementChild;
    if (!out) return;

    const buttons = container.querySelector('.buttons');
    if (!buttons) return;

    const buffer = {
        prev: null,
        second: null,
        oper: null,
        point: 0
    }

    const buttonHandler = e => {
        let target = e.target;
        let type = '';


        if (target.classList.contains('button')) {
            type = target.dataset.type;
            if (!type) return;

            if (type === 'ac') {
                out.value = 0;
                buffer.oper = null;
                buffer.prev = null;
                buffer.second = null;
                buffer.point = 0;
            }

            if (type === 'num') {
                out.value = +(out.value + target.innerText);
            }

            if (type === 'mat-op') {
                let oper = target.dataset.val
                if (!oper) return;
                buffer.prev = +out.value * 100;
                buffer.oper = oper;
                buffer.point = 0;
                out.value = 0;
            }

            if (type === 'mat-rez') {
                if (!buffer.oper) return;
                if (buffer.oper !== '/' && buffer.oper !== '*') {
                    out.value = eval(`${buffer.prev} ${buffer.oper} ${+out.value * 100}`) / 100;
                } else if (buffer.oper === '*') {
                    out.value = eval(`${buffer.prev} ${buffer.oper} ${(+out.value * 100)}`) / (100 * 100);
                } else {
                    out.value = eval(`${buffer.prev / 100} ${buffer.oper} ${+out.value}`);
                }
                buffer.oper = null;
                buffer.prev = null;
                buffer.second = null;
                buffer.point = 0;
            }

            if (type === 'point') {
                if (buffer.point === 0) {
                    out.value = out.value + target.innerText;
                    buffer.point = 1;
                }
            }

            if (type === 'abs') {
                out.value = +out.value * -1;
            }

            if (type === 'proc') {
                out.value = +out.value / 100;
            }
        }
    }

    buttons.addEventListener('click', buttonHandler);
}

calculate('.calculate')