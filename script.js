/**
 * Note - заметка
 * NoteController - конструктор работы с заметками
 * NoteUI - отображение на странице
 */

class Note {
    constructor(data) {
        if (data.title.length > 0) this.data = data;
    }

    edit(data) {
        this.data = { ...this.data, ...data };
    }
}

class NoteController {
    constructor() {
        this.notes = [];
    }

    add(data) {
        if (data.title.length === 0) return;
        let note = new Note(data);
        let id = this.getId();
        note.edit({ id }); // {id: id}
        this.notes.push(note);
    }

    getId() {
        let id = Math.floor(Math.random() * 150000);
        if (this.notes.length === 0) return id;
        let bool = this.notes.some(note => note.data.id === id);
        if (bool) {
            return this.getId();
        } else {
            return id;
        }
    }

    remove(id) {
        this.notes = this.notes.filter(note => note.data.id !== id);
    }

    edit(id, data) {
        // this.notes.forEach(note => { // МЕДЛЕННО
        //     if (note.data.id === id) {
        //         note.edit(data);
        //     }
        // });
        let note = this.notes.find(note => note.data.id === id);
        note.edit(data);
    }

    get stor() {
        let data = localStorage.getItem('notes');
        return JSON.parse(data);
    }

    set stor(data) {
        let json = JSON.stringify(data);
        localStorage.setItem('notes', json);
    }

    get cookie() {
        let name = 'notes';
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? true : false;
    }

    set cookie(v) {
        const options = {
            path: '/',
            secure: true,
            'max-age': v
        };

        let name = 'notes';
        let value = '';

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    async getApiData() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        return data;
    }
}

class NoteUI extends NoteController {
    constructor(selector) {
        super();
        this.root = document.querySelector(selector);
        this.noteContainer = document.createElement('div');

        this.preloader = document.createElement('div');
        this.preloader.classList.add('preloader');
        this.preloader.innerHTML = `
        <div class="preloader__row">
            <div class="preloader__item"></div>
            <div class="preloader__item"></div>
        </div>
        `;

        this.root.append(this.preloader);

        new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 3000)
        })
            .finally(() => {
                this.preloader.remove();
                this.init();
            })

        // this.init();
    }

    async init() {
        this.inputContainer = document.createElement('form');
        let title = document.createElement('input');
        title.setAttribute('type', 'text');
        let content = document.createElement('textarea');
        let send = document.createElement('button');
        send.innerText = 'Send';
        send.setAttribute('type', 'submit');
        this.inputContainer.append(title, content, send);

        this.inputContainer.addEventListener('submit', event => {
            event.preventDefault();

            let data = {
                title: title.value,
                body: content.value,
            }

            this.add(data);
            title.value = '';
            content.value = '';

            this.stor = this.notes;
            this.cookie = 10;
            this.render();
        });

        if (!this.stor) {
            // Отрисовать прелоадер
            this.root.append(this.preloader);
            let data = await this.getApiData();
            this.preloader.remove();
            // Удалить прилоадер
            // this.stor = data;
            data.forEach(note => this.add(note));
            this.stor = this.notes;
            this.render();
        }

        if (!this.cookie) {
            localStorage.removeItem('notes');
        }

        if (this.stor) {
            this.stor.forEach(note => this.add(note.data));
            this.render();
        }

        // console.log(this.cookie);

        this.root.append(this.inputContainer, this.noteContainer);
    }

    render() {
        this.noteContainer.innerHTML = '';
        this.notes.forEach(note => {
            let flag = false;
            let item = document.createElement('div');
            let title = document.createElement('h2');
            title.innerHTML = note.data.title;
            let content = document.createElement('p');
            content.innerHTML = note.data.body;
            let buttons = document.createElement('div');
            let edit = document.createElement('button');
            edit.innerText = 'Edit';
            let remove = document.createElement('button');
            remove.innerText = 'Remove';
            buttons.append(edit, remove);
            item.append(title, content, buttons);

            remove.addEventListener('click', () => {
                this.remove(note.data.id);
                this.stor = this.notes;
                this.render();
            });

            edit.addEventListener('click', () => {
                if (flag) {
                    title.contentEditable = false;
                    content.contentEditable = false;
                    let data = {
                        title: title.innerText,
                        body: content.innerText
                    };
                    this.edit(note.data.id, data);
                    edit.innerText = 'Edit';
                    flag = !flag;
                    this.stor = this.notes;
                } else {
                    title.contentEditable = true;
                    content.contentEditable = true;
                    edit.innerText = 'Save';
                    flag = !flag;
                }
            });

            this.noteContainer.append(item);
        });
    }
}

new NoteUI('.root');

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Промис выполнен'), 3000);
//     setTimeout(() => reject('Промис не выполнен'), 3500);
// });

// let preloader = document.createElement('div');
// preloader.classList.add('preloader');
// preloader.innerHTML = `
// <div class="preloader__row">
//     <div class="preloader__item"></div>
//     <div class="preloader__item"></div>
// </div>
// `;

// document.body.append(preloader);

// promise
//     .then(
//         rez => console.log(rez),
//         // err => console.log(err)
//     )
//     .catch(
//         err => console.log(err)
//     )
//     .finally(() => {
//         preloader.remove();
//     });

// Promise.resolve(promise)
//     .then(rez => console.log(rez))

// const myFetch = ms => {
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             () => {
//                 resolve(`Промис выполнен через ${ms}ms`)
//             },
//             ms);
//     });
// }

// let p1 = myFetch(2300);
// let p2 = myFetch(5600);
// let p3 = myFetch(1200);
// // let p4 = Promise.reject(3);

// Promise.race([p1, p2, p3]) //[p1, p2, p3, p4]
//     .then(rez => {
//         console.log(rez);
//     });

// Promise.all([p1, p2, p3]) //[p1, p2, p3, p4]
//     .then(rez => {
//         rez.forEach(data => console.log(data));
//     });

new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})
    .then(rez => {
        console.log(rez);
        // return rez * 2;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(rez * 2), 1000);
        })
    })
    .then(rez => {
        console.log(rez);
        // return rez * 2;
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(rez * 2), 1000);
        })
    })
    .then(rez => {
        console.log(rez);
    })
