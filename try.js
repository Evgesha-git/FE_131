'use strict'
try {
    test = 'a';
    console.log(test);
    // const resp = await fetch('');
    // if (resp.status() !== 200) {
    //     throw new Error('Ошибка по желанию');
    // }
    console.log('Не выполнюсь никогда');
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Работаю всегда');
}
// test = 'a';
// console.log(test);