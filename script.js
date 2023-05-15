let items_1 = document.getElementsByTagName('p');
let items_2 = document.querySelectorAll('p');

let style = document.createElement('style');
style.innerHTML = `
    .header{
        font-size: 40px;
        color: #10f4ae;
    }
`;

document.head.append(style);

function color(selector, color) {
    let elem = document.querySelector(selector);
    elem.style.color = color;
}

// color('.header', 'red')

function f1() {
    this.style.fontSize = '36px';
}

items_2.forEach(elem => elem.onclick = f1);

let textArr = [
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Officia, rerum inventore repudiandae dolor aperiam dolores.',
    'Iusto, mollitia harum. Nostrum beatae cum numquam.',
    'Consequuntur vitae amet voluptates nobis inventore accusamus!'
];

let textContainer = document.querySelector('.text');

const createElement = (tag, className, content) => {
    let elem = document.createElement(tag);
    let classes = className.split(' ');
    if (classes.length > 0) {
        classes.forEach(c => {
            elem.classList.add(c);
        });
    }
    elem.innerText = content;
    return elem;
}

textArr.forEach(text => {
    let elem = createElement('p', 'class1 class2 class3', text);
    textContainer.append(elem);
});

let div = document.querySelector('.child_1');

console.log(div.firstElementChild);
console.log(div.lastElementChild);
console.log(div.children);

console.log(div.previousElementSibling);
console.log(div.nextElementSibling);

console.log(div.parentNode);

const changeDiv = function () {
    // let elem = document.querySelector('.square');
    this.classList.toggle('active');
    console.log(this.classList.contains('active'));
    this.removeEventListener('click', changeDiv);
}

document.querySelector('.square').addEventListener('click', changeDiv);