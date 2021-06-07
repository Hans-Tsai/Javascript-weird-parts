// 函數物件的 Function.bind()、Function.call()、Function.apply() 方法們、函數借用 (function borrowing)、函數柯里化 (function currying)

/** Function.bind() 方法 */
var person = {
    firstName: 'Hans',
    lastName: 'Tsai',
    getFullName: function () {
        var fullName = `${this.firstName} ${this.lastName}`
        return fullName;
    }
};

/** 錯誤示範: 當 this 變數指向全域物件時，會印出 undefined */
var logName = function (lang1, lang2) {
    console.log(`Logged: ` + this.getFullName());
    console.log(`Arguments: ${lang1}、${lang2}`);
    console.log(`-----------------------------`);
};

/** 因為 this.getFullName 會指向全域物件，而全域物件並沒有 getFullName() 這個方法 */
// logName();   // undefined

/** 解決方法一: 加上 Function.bind() 方法，強制將新的函數物件拷貝 logName2 的新執行環境中 this 變數指向 person 物件 
 * @note 也就是說這時候 logName2 內的 this.getFullName() 就相當於是 person.getFullName()
*/
var logName2 = function (lang3, lang4) {
    console.log(`Logged: ` + this.getFullName());
}.bind(person);

logName2();   // Logged: Hans Tsai

/** 解決方法二: 宣告一個新的函數物件，使用 Function.bind(${給定 this 變數要指向的物件}) 方法 */
var logPersonName = logName.bind(person);

logPersonName();   // Logged: Hans Tsai、Arguments: undefined、undefined

// ----------------------------------------------------------------------------------------------------------

/** Function.call() 方法 */
logName.call(person, 'English', 'Spanish');   // Logged: Hans Tsai、Arguments: English、Spanish

/** Function.apply() 方法 */
logName.apply(person, ['English', 'Spanish']);   // Logged: Hans Tsai、Arguments: English、Spanish

// ----------------------------------------------------------------------------------------------------------

/** function borrowing */
var person2 = {
    firstName: 'Eric',
    lastName: 'Wang',
};
console.log(person.getFullName.apply(person2));   // Eric Wang

/** function currying */
function multiply (a, b) {
    return a*b;
}

/** Function.bind() 後面的參數會設定給新拷貝的函數物件作為永久參數預設值 */
var multipleByTwo = multiply.bind(this, 2);
/** 因此，這樣呼叫函數的話，就相當於給定新的函數物件拷貝(=> 也就是 multipleByTwo)的 b 參數值為 4 */
console.log(multipleByTwo(4));   // 8 = 2 * 4

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));   // 12 = 3 * 4

/** 上述寫法相當於以下的意思，給定新拷貝的函數永久參數預設值 */
function multiplyDirection (c, d) {
    var c = 2;
    return c*d;
}

