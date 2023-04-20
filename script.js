// let arr = [1, 2, 34, 'gtfed', [1, 3, '456'], b];

// let arr = [];

// while (true) {
//     let num = prompt('Введите число');
//     if (isNaN(num)) {
//         alert('Ввели не чило');
//         continue;
//     }
//     if (num === '') {
//         break;
//     }
//     arr.push(+num);
// }

// arr.sort(function (a, b) {
//     return a - b;
// });

// console.log(arr);

// let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 0, 13, 2];
// let firsIndex = arr.indexOf(0),
//     lastIndex = arr.lastIndexOf(0),
//     summ = 0;

// if (firsIndex === lastIndex) {
//     console.log(summ);
// } else {
//     for (let i = firsIndex; i < lastIndex; i++) {
//         summ += arr[i];
//     }
//     console.log(summ);
// }

// let h = +prompt('Высота пирамидки');

// for (let i = 1; i <= h; i++) {
//     let str = '';
//     let p = '';
//     for (let j = 0; j < h - i; j++) {
//         str += ' ';
//     }
//     for (let a = 0; a < i * 2 - 1; a++) {
//         p += '^';
//     }

//     document.write(`<pre>${str + p}</pre>`);
// }


// let str = 'hello world';

// str = str.split(' ');
// for (let i = 0; i < str.length; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].slice(1);
// }

// str = str.join(' ');
// console.log(str);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// let arr3 = [...arr1];

// let arr3_2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr3_2.push(arr1[i]);
// }

// let elems = document.querySelectorAll('p');

// console.log(elems);

// [...elems].map(function (elem) {
//     setInterval(function () {
//         elem.style.fontSize = Math.floor(Math.random() * (50 - 10) + 10) + 'px';
//     }, 100);
// });

// let user = ['Иванов', 'Иван', 'Иванович'];

// let [name, ...lastName] = user;
// console.log(name);
// // console.log(surName);
// console.log(lastName);

// let a = 3;
// let b = 6;

// [a, b] = [b, a];

let nums = [2, 34, 234, 34, 3, 1, 45, 65, 32];
let numsNew = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        numsNew.push(nums[i]);
    }
}

console.log(numsNew);

nums = nums.filter(num => num % 2 === 0);
// nums = nums.filter(function(num){
//     return num % 2 === 0
// });

console.log(nums);

for (let key in nums) {
    console.log(key);
}

for (const num of nums) {
    console.log(num);
}