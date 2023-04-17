// let summ = 0,
//     count = 0;

// while (true) {
//     let num = prompt('Введите число');
//     if (isNaN(num) || num === '') {
//         alert('Введено не чило');
//         continue;
//     }
//     if (+num === 0) { // if (!+num)
//         break;
//     }
//     summ += +num; // summ += Number(num) | summ = summ + Number(num)
//     count++; // count = count + 1 | count-- -> count = count - 1
// }

// alert('Общая сумма: ' + summ + '\nСреднее арифметическое: ' + summ / count);

// let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
// let min = Infinity,
//     max = -Infinity;
// let buf = '';

// for (let i = 0; i < str.length; i++) {

//     if (str[i] !== ' ') {
//         buf += str[i];
//     } else {
//         if (+buf > max) max = +buf;
//         if (+buf < min) min = +buf;
//         buf = '';
//     }
// }

// console.log('Макимальное число: ' + max + '\nМинимальное число: ' + min);

// let num = prompt('Введите число');
// let count = 0,
//     summ = 0,
//     rev = '';

// for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     count++;
//     summ += +num[i];
//     rev = num[i] + rev;
// }

// console.log(`Исходное число: ${num}
// Сумма цифр: ${summ}
// Количество цифр: ${count}
// Число в обратном порядке: ${rev}`);

// var i = 45;

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

let arr = [1, 2, 3, 4];
let arr2 = new Array(5).fill('b');

console.log(arr.length);
// console.log(arr2);
arr[1000] = 'lol';
console.log(arr.length);

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        count++;
    }
}

console.log(count);

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
str = str.split(' ');
console.log(str.join(' * '));