// 反應 (Reflection)、Lodash 實戰篇: _.extend()

/** 載入 Lodash 函式庫內的核心 API 就好 */
const _ = require('lodash/core');

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

/** for ...in obj 迴圈中的 me[itemKey] 就是一種反應 (reflection)，我們可以用中括號 ([ ]) 來設定 me 物件自己的屬性、方法  */
for (var itemKey in me) {
    // 利用 Object.hasOwnProperty() 方法來檢查 me 物件是否含有該屬性，這麼做可以過濾掉非 me 物件的屬性
    if (me.hasOwnProperty(itemKey)) console.log(`${itemKey}: ${me[itemKey]}`);   // firstName: Hans、lastName: Tsai
};

var Eric = {
    address: '111 Main St.',
    getFormalFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
};

var Amy = {
    getFirstName: function () {
        return firstName;
    },
};

/** 利用 Lodash 的 _.extend() 方法就能讓 me 物件繼承後面物件們的屬性、方法 
 * @note 注意! 這邊的 _.extend() 方法跟 ES6 新的語法繼承 (extends) 完全沒有任何關係!
*/
_.extend(me, Eric, Amy);

console.log(me);
// {
//     firstName: 'Hans',
//     lastName: 'Tsai',
//     address: '111 Main St.',
//     getFormalFullName: [Function: getFormalFullName],
//     getFirstName: [Function: getFirstName]
// }