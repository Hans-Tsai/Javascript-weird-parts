// Javascript 獨有的建立物件的方法: Object.create() --- 純粹的原型繼承 (pure prototypal inheritance) & polyfill

/** polyfill 
 * @note polyfill 的目的是寫一些程式來填補某些舊版瀏覽器 or 舊版Node 的 Javascript Engine 不支援語法的情況
*/
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) { 
            throw new Error(`Object.create implementation 
                only accepts the first parameter.`)
        };
        function F() {};
        F.prototype = o;
        return new F();
    }
};

var person = {
    firstName: 'Hans',
    lastName: 'Tsai',
    greet: function () {
        // 記得要用 this.firstName。如果直接用 firstName 屬性的話，它會在當此方法被呼叫執行時，到執行環境中找，
        // 找不到，接著到全域環境找，也不會找到。因為 firstName 是隸屬於 person 物件的屬性
        return `Hi ${this.firstName}`;
    },
};

/** 在 Javascript 中，我們可以利用 Object.create() 方法來建立一個新物件，並且能指定它參考的原型 (prototype) 物件 
 * @description 指定 john 物件的原型 (prototype) 為 person 物件，讓 john 物件利用原型鏈 (prototype chain) 的方式繼承 person 物件
*/
var john = Object.create(person);
/** 覆寫 john 物件的成員屬性值 */
john.firstName = 'Eric';
john.lastName = 'Chen';
console.log(john);   // { firstName: 'Eric', lastName: 'Chen' }
console.log(john.greet());   // Hi Eric