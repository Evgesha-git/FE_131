function User(name, surname, age) {
    // this.name = name;
    // this.surname = surname;
    this.age = age;
    // let self = this;

    this.getName = function () {
        return name;
    }
    this.setName = function (n) {
        let regExp = /[A-Z]/g;
        if (regExp.test(n)) {
            name = n;
        }
        return this;
    }

    const charToCode = (char, index) => {
        // console.log(self);
        console.log(this);
        let charCode = char.charCodeAt();
        return charCode.toString(index);
    }

    this.toString = function (index = 0) {
        if (!index) return `${name}, ${surname}, ${this.age}`;
        if (index >= 2 && index <= 36) {
            console.log(this);
            let str = `${name}, ${surname}, ${this.age}`;
            let rez = '';
            for (let i = 0; i < str.length; i++) {
                rez += charToCode(str[i], index);
            }
            return rez
        } else {
            throw new Error('Неверный диапазон чисел, от 2 до 36');
        }
    }


}

User.prototype.getAge = function () {
    return this.age;
}

function f() {
    return () => {
        console.log(arguments);
    }
}

let user = new User("Alex", "Alexeev", 25);


function Lamp(power) {
    this.power = power;
    this.state = false;

    this.toggle = () => {
        this.state = !this.state;
    }

    this.getState = () => {
        if (this.state) {
            return ' Лампочка горит';
        } else {
            return ' Лампочка не горит';
        }
    }
}

let lamp = new Lamp(100);

let user1 = {
    name: 'Alex',
    age: 24,
}

let student = {
    cours: 4,
    group: '435j',
}

student.__proto__ = user1;

console.log(student);

/**
 * call
 * aply
 * bind
 */

let str = [].map.call('abracadabra', (item) => item.toUpperCase());