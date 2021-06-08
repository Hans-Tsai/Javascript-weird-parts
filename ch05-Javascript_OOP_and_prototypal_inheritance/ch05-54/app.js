// 原型 (prototype): 原型鏈 (prototype chain)、物件的內建原型屬性 (__proto__)

var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName () {
        // 物件方法 (e.g. obj.method())，如果一個函式是以物件的方法呼叫，它的 this 變數會被設定為呼叫該函式的物件。
        return `${this.firstName} ${this.lastName}`;
    }
};

var me = {
    firstName: 'Hans',
    lastName: 'Tsai',
};

//#region 
/** 錯誤示範: 僅為了示範用，實戰中不建議這樣做 
 * @description 設定 me 物件繼承 person 物件
*/
me.__proto__ = person;
console.log(me.getFullName());   // Hans Tsai
console.log(me.firstName);   // Hans

// 設定 jane 物件也繼承 person 物件
var jane = {
    firstName: 'Jane',
};
jane.__proto__ = person;
console.log(jane.getFullName());   // Jane Default

//#endregion

