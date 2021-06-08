// 建立新物件及其原型: 函數建構子 (function constructor)、函數建構子的屬性 (functionConstructorName.prototype)

/** 利用函數建構子 (function constructor) 就是一個函數 
 * @note 可以透過函數建構子的參數，來動態傳入我們想要個別設定的成員屬性值
*/
function Person(firstName, lastName) {
    console.log(this);   // Person {}
    // 開始新增 Person 物件的兩個新成員屬性們
    this.firstName = firstName;
    this.lastName = lastName;
    // 是可以這樣做，但不建議，基於效能問題
    // this.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`;
    // };
    // this.getFormalInformation = function () {
    //     return `${this.firstName} ${this.lastName}'s address --- ${address}`;
    // };
    console.log(`This function is invoked.`);
    // 若這是一個函數建構子，並且沒有回傳任何東西的話，就會自動回傳一個新的空物件叫做 Person { }，而不是回傳 undefined 
}

/** 所有透過函數建構子所創造出來的新物件，都能利用 ${函數建構子名稱.prototype} 這個函數建構子屬性來設定這個新物件的原型  */
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getFormalInformation = function (address) {
    return `${this.firstName} ${this.lastName}'s address --- ${address}`;
};

/** 利用 new 關鍵字來建立一個新物件 */
var me = new Person('Hans', 'Tsai');
console.log(me);   // Person { firstName: 'Hans', lastName: 'Tsai' }
console.log(`getFullName: ` + me.getFullName());   // getFullName: Hans Tsai
console.log(`getFormalInformation: ` + me.getFormalInformation('111 Main St.'));   // getFormalInformation: Hans Tsai's address --- 111 Main St.

var her = new Person('Amy', 'Chen');
console.log(her);   // Person { firstName: 'Amy', lastName: 'Chen' }
console.log(`getFullName: ` + her.getFullName());   // getFullName: Amy Chen
console.log(`getFormalInformation: ` + her.getFormalInformation('100 Second St.'));   // getFormalInformation: Amy Chen's address --- 100 Second St.