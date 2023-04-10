// let str = 'string';
// let num = 123;
// let bool = true;
// let obj = {};
// let und = undefined;
// let n = null;
// let symbol = Symbol();
// let bInt = BigInt(12312);

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof bool);
// console.log(typeof obj);
// console.log(typeof und);
// console.log(typeof n);
// console.log(typeof symbol);
// console.log(typeof bInt);


// var a = 34;
// let b = 17;
// const c = 44;

// console.log(a);
// console.log(b);

// {
//     let b = 56;
//     var a = 'string';
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);


let num = '178.3f4';

console.log(Number(num));
console.log(+num);
console.log(parseInt(num));
console.log(parseFloat(num));

/**
 * >
 * <
 * >=
 * <=
 * != - без проверки типа
 * !== - с проверкой типа
 * == - без проверки типа
 * === - с проверкой типа
 * 
 * Математические операторы
 * 
 * + - сложение
 * - - вычитание
 * * - умножение
 * ** - возведение в степень
 * / - деление
 * % - остаток от деления
 * 
 * +=
 * -=
 * *=
 * **=
 * /=
 * %=
 */

let str = 4;

console.log(typeof String(str));
console.log(str.toString(2));
console.log(typeof (str + ''));

/**
 * 0 -> 0
 * 1 -> 1
 * 2 -> 10
 * 3 -> 11
 */

// let g = +prompt('Введите число');
// console.log(g + g);

let construct = 22;

console.log(construct);