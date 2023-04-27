// function f12(name, surName, lastName, group) {
//     let title = 'Домашняя работа: «Функции»';
//     let subTitle = 'Выполнил: студент гр. ' + group;
//     let stringName = `${name} ${surName} ${lastName}`;

//     let maxStr = 0;
//     if (title.length > maxStr) maxStr = title.length;
//     if (subTitle.length > maxStr) maxStr = subTitle.length;
//     if (stringName.length > maxStr) maxStr = stringName.length;

//     let ramka = '';
//     for (let i = 0; i < maxStr + 4; i++) {
//         ramka += '*';
//     }
//     // *******************************
//     // * Домашняя работа: «Функции»  *
//     // * Выполнил: студент гр. W4017 *
//     // * Иванов Иван Иванович        *
//     // *******************************

//     const fStr = function (str, len) {
//         for (let i = str.length; i < len; i++) {
//             str += ' ';
//         }
//         return ('* ' + str + ' *');
//     }

//     title = fStr(title, maxStr);
//     subTitle = fStr(subTitle, maxStr);
//     stringName = fStr(stringName, maxStr);

//     console.log(ramka);
//     console.log(title);
//     console.log(subTitle);
//     console.log(stringName);
//     console.log(ramka);
// }

// f12(prompt('Имя'), prompt('Фамилия'), prompt('Отчетсво'), prompt('Группа'));

function f10(num) {
    let summ = 0;
    if (num < 10) return num;
    num = num + '';
    for (let i = 0; i < num.length; i++) {
        summ += +num[i];
    }
    if (summ < 10) {
        return summ
    }
    return f10(summ);
}

// f10(5676) -> f10(24) -> 6

function f11(arr) {
    if (arr.length === 0) return;
    console.log(arr.pop());
    f11(arr);
}

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    }
}

let counter1 = makeCounter();
let counter2 = makeCounter();

/**
 * function declaration
 */
// name()
// function name(arg) {
//     alert('hi')
// }

// /**
//  * function expression
//  */
// // f2() -> error
// const f2 = function () {
//     alert('hi 2');
// }
// f2();
// // f2() -> normal

// (function () {
//     alert('hi 3')
// })();

const f3 = () => {
    alert('hi 4')
}

const f4 = x => x * x;
/**
 * const f4 = x => {
 *   return x * x
 * }
 */

const f5 = (a, b) => a + b;
/**
 * function f5(a, b){
 *  return a + b;
 * }
 */