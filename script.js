/**
 * Note - заметка
 * NoteController - конструктор работы с заметками
 * NoteUI - отображение на странице
 */

const Note = function (data) { //data -> {title, content}
    if (data.title.length > 0) this.data = data;

    this.edit = (data) => {
        Object.assign(this.data, data);
        // this.data = {
        //     ...this.data,
        //     ...data,
        // };
    }
}
// arguments -> [name, age, cours] -> 
// let note = new Note({ title: 'Первая заметка', content: 'Контент заметки' });

const NoteController = function () {
    this.notes = [];

    this.add = (data) => {
        let note = new Note(data);
        let id = this.getId();
        note.edit({ id }); // {id: id}
        this.notes.push(note);
    }

    this.getId = () => {
        let id = Math.floor(Math.random() * 150);
        if (this.notes.length === 0) return id;
        let bool = this.notes.some(note => note.data.id === id);
        if (bool) {
            return this.getId();
        } else {
            return id;
        }
    }
}

NoteController.prototype.remove = function (id) {
    this.notes = this.notes.filter(note => note.data.id !== id);
}

NoteController.prototype.edit = function (id, data) {
    this.notes.forEach(note => {
        if (note.data.id === id) {
            note.edit(data);
        }
    })
}

// let notes = new NoteController();

const NoteUI = function (selector) {
    NoteController.apply(this, arguments);
    this.root = document.querySelector(selector);
    this.noteContainer = document.createElement('div');

    this.init = () => {
        this.inputContainer = document.createElement('form');
        let title = document.createElement('input');
        title.setAttribute('type', 'text');
        let content = document.createElement('textarea');
        let send = document.createElement('button');
        send.innerText = 'Send';
        send.setAttribute('type', 'submit');
        this.inputContainer.append(title, content, send);

        this.root.append(this.inputContainer, this.noteContainer);
    }

    // this.edit = function (id, data){
    //     NoteController.prototype.edit.call(this, id, data)
    // }
}

NoteUI.prototype = Object.create(NoteController.prototype);

let ui = new NoteUI('.root');
ui.init();

// let a = {
//     name: 'Alex',
//     age: 22,
// }

// let b = {
//     group: 2343
// }

// b.__proto__ = a
