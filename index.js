/**
 * 1 - Создание элемента
 * 2 - Рендер элементов
 */

let main = document.createElement('main');
main.classList.add('main');
main.setAttribute('data-id', '34g53j');
main.innerHTML = 'Main element';

let h1 = document.createElement('h1');
h1.innerHTML = 'Main header';

let p = document.createElement('p');
p.innerHTML = 'Main text';

document.getElementById('root1')?.append(main, h1, p);

let h1R = React.createElement('h1', {
    className: 'reactHeader',
    title: 'Header react'
}, 'Main react header');

let pR = React.createElement('p', null, 'Maint react text');

let mainR = React.createElement('main', {
    className: 'class1 class2 class3',
    'data-id': '324hk3h'
}, [
    'Main react element',
    h1R,
    pR,
    React.createElement('img', {
        src: 'https://via.placeholder.com/80',
        alt: '#'
    })
]);

let root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(mainR);

/**
 * 3 - Создание компонентов
 */

function Logo() {
    this.create = () => {
        this.elem = document.createElement('div');
        this.elem.classList.add('logo');
        this.elem.innerHTML = `
            <a href="#">
                <img src="https://via.placeholder.com/60" alt="logo" />
            </a>
        `;
        return this.elem;
    }
}

document.getElementById('root3')?.append(new Logo().create());

function ReactLogo() {
    const elem = React.createElement('div', {
        className: 'logoReact',
    },
        React.createElement('a', {
            href: '#'
        },
            React.createElement('img', {
                src: 'https://via.placeholder.com/70',
                alt: '#'
            })
        )
    )
    return elem;
}

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(ReactLogo());

/**
 * JSX => react
 */

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(
    <React.Fragment>
        <div className="logo-jsx">
            <a href="#">
                <img src="https://via.placeholder.com/100" alt="#" />
            </a>
        </div>
        <div className="main">
            <h1 className='JSX-header'>JSX header</h1>
            <p className='JSX-text'>JSX text</p>
        </div>
    </React.Fragment>
);

/**
 * 4 - пропсы
 * 5 - состояния
 * 6 - события
 */

function Header(props) {
    return (
        <header className='header'>
            Header content {props.content} {props.a + props.b}
            <h2>{props.children}</h2>
        </header>
    )
}

class Header2 extends React.Component {
    constructor(props) {
        super();
    }
    //code
    render() {
        return (
            <header className='header'>
                Header content {this.props.content} {this.props.a + this.props.b}
            </header>
        )
    }
}

// let arr = [1, 2, 3]
// const [firs, second, last] = arr;

function Block({ children }) { // props.children => { children }
    return (
        <h3>{children}</h3>
    )
}

const root6 = ReactDOM.createRoot(document.getElementById('root6'));

root6.render(
    <>
        <Header content='JSX props content' a={4} b={14} >
            Lorem ipsum dolor sit.
        </Header>
        <Header2 content={'JSX class component'} a={5} b={7} />
        <Block>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores?
        </Block>
    </>
);