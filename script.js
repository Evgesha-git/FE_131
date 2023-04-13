// let num = prompt();

// if ((+num[0] + +num[1] + +num[2]) === (+num[3] + +num[4] + +num[5])) {
//     console.log('да');
// } else {
//     console.log('нет');
// }

// switch ((+num[0] + +num[1] + +num[2]) === (+num[3] + +num[4] + +num[5])) {
//     case true:
//         console.log('да');
//         break
//     case false:
//         console.log('нет');
// }

// let a = prompt();

// let b = a || 1;
// let c = a ?? 2;

// console.log(b);
// console.log(c);

// let time = +prompt();

// let years = parseInt(time / (365 * 24 * 3600));
// time = time % (365 * 24 * 3600);
// let monts = parseInt(time / (31 * 24 * 3600));
// time = time % (31 * 24 * 3600);
// let weeks = parseInt(time / (7 * 24 * 3600));
// time %= (7 * 24 * 3600);
// let days = parseInt(time / (24 * 3600));
// time %= (24 * 3600);
// let hours = parseInt(time / 3600);
// time = time % 3600;
// let minuts = parseInt(time / 60);
// time %= 60;


// if (years > 1) {
//     console.log(years + ' лет');
// } else {
//     console.log('Меньше года');
// }

// if (monts > 1) {
//     console.log(monts + ' Месяцев');
// } else {
//     console.log('Меньше месяца');
// }

// if (weeks > 1) {
//     console.log(weeks + ' недель');
// } else {
//     console.log('Меньше недели');
// }

// if (days > 1) {
//     console.log(days + ' дней');
// } else {
//     console.log('Меньше дня');
// }

// if (hours > 1) {
//     console.log(hours + ' часов');
// } else {
//     console.log('Меньше часа');
// }

// if (minuts > 1) {
//     console.log(minuts + ' минут');
// } else {
//     console.log('Меньше минуты');
// }
// console.log(time + ' секунд');

let days = +prompt();
if (days < 0 || days > 365) {
    console.log('Неверно введенный день');
} else {
    let mont = 0;
    let season = '';

    if (days <= 31) {
        mont = 1;
    } else if (days <= 59) {
        mont = 2;
    } else if (days <= 90) {
        mont = 3;
    } else if (days <= 120) {
        mont = 4;
    } else if (days <= 151) {
        mont = 5;
    } else if (days <= 181) {
        mont = 6;
    } else if (days <= 212) {
        mont = 7;
    } else if (days <= 243) {
        mont = 8;
    } else if (days <= 273) {
        mont = 9;
    } else if (days <= 304) {
        mont = 10;
    } else if (days <= 334) {
        mont = 11;
    } else {
        mont = 12;
    }

    switch (mont) {
        case 12:
        case 1:
        case 2:
            season = 'зима';
            break;
        case 3:
        case 4:
        case 5:
            season = 'весна';
            break;
        case 6:
        case 7:
        case 8:
            season = 'лето';
            break;
        case 9:
        case 10:
        case 11:
            season = 'осень';
    }

    console.log(mont + ' - месяц');
    console.log(season + ' - пора года');
}