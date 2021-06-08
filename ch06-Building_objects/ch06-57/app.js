// 建立新物件: new 關鍵字、函數建構子 (function constructor)

/** 利用函數建構子 (function constructor) 就是一個函數 
 * @note 可以透過函數建構子的參數，來動態傳入我們想要個別設定的成員屬性值
*/
function Person(firstName, lastName) {
    console.log(this);   // Person {}
    // 開始新增 Person 物件的兩個新成員屬性們
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(`This function is invoked.`);
    // 若這是一個函數建構子，並且沒有回傳任何東西的話，就會自動回傳一個新的空物件叫做 Person { }，而不是回傳 undefined 
}

/** 利用 new 關鍵字來建立一個新物件 */
var me = new Person('Hans', 'Tsai');
console.log(me);   // Person { firstName: 'Hans', lastName: 'Tsai' }

var her = new Person('Amy', 'Chen');
console.log(her);   // Person { firstName: 'Amy', lastName: 'Chen' }