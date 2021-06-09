// ES6: class、extends、super

/** 在 Javascript 中，類別(class) 關鍵字只是用來簡化 JavaScript 中操作 constructor 的一種語法糖而已
 * @note Javascript 的 Class Person() { } 其實也是一個物件，只是我們可以基於它，再建立出另一個新物件，這就是原型繼承 (prototypal inheritance) 的精神
 */
class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    greet () {
        return `Hi ${firstName}`;
    };
};

var me = new Person('Hans', 'Tsai');
console.dir(me, { depth: 10 });   // Person { firstName: 'Hans', lastName: 'Tsai' }

class InformalPerson extends Person {
    constructor (firstName, lastName) {
        super(firstName, lastName);
    };
    greet () {
        return `Yo ${firstName}`;
    };
};
