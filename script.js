function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let s = ' \t \n   djfgjkdgh gjh sdf  \n  ';
console.log(s);
console.log(s.trim());
console.log(s.trimEnd());
console.log(s.trimStart());
console.log(s.replace(/^\s+/g, '').replace(/\s+$/g, ''));


let arr = [4, 2, 5, 19, 13, 0, 10];

// let num = Math.sqrt(arr.reduce(function (acc, elem) {
//     return acc += elem ** 3;
// }, 0));

let num = Math.sqrt(arr.reduce((acc, elem) => acc += elem ** 3, 0));

console.log(num);

const email = function (mail) {
    let regExp = /^[^\d]{1}[a-zA-Z_\.\d]{1,}@{1}[a-zA-Z\d_]{2,11}\.[a-z]{2,11}/g;
    return regExp.test(mail);
}

/**
 * емаил@почта.бел
 * test@mail.com
 * test._2@test.com
 * test._\$@test.com
 * ts@test.com
 * t@test.com
 * 2test@mail.com
 */

const addres = function (url) {
    let regExp = /(https?:\/\/\d?[a-z][a-z0-9]+(?:\.?[0-9a-z]+)*\.[a-z]{2,11})(\/(?:[^#\?\s])+\/?)?(\?[^#]+)?(#\w+)?/g;

    let groups = regExp.exec(url);
    // console.log([...groups]);

    return [...groups].filter((elem, index) => index !== 0 ? elem : null);
}

let arr2 = {
    elem1: '423',
    elem2: '53453'
}

let user = {
    name: 'Alex',
    age: 23,
    gender: 'c',
    scinColor: 'black',
    getName: function () { //аксессор
        console.log(this);
        return this.name
    },
    setName: function (value) { //мьютейтор
        this.name = value
    }
}