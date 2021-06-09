// typeof & instanceof 關鍵字

/** typeof: 回傳這個東西的型別 */
var a = 3;
console.log(typeof a);   // 'number'

var b = "Hello";
console.log(typeof b);   // 'string'

var c = {};
console.log(typeof c);   // 'object'

var d = [];
console.log(typeof d);   // 'object' =>  weird
console.log(Object.prototype.toString.call(d));   // '[object Array]', better
 
var e = undefined;
console.log(typeof e);   // 'undefined'

/** 注意! typeof null 的型別為 'object' */
var f = null;
console.log(typeof f);   // 'object'

/** 注意! typeof function () {} 的型別為 'function' */
var g = function () {};
console.log(typeof g);   // 'function'

/** instanceof: 回傳這個東西是否在指定的原型鏈 (prototype chain) 上 
 * @note 也就是說 e.__proto__.__proto__ ... 沿著其原型鏈一路往上搜尋就可以找到 Person 函數物件
*/
function Person (name) {
    this.name = name;
}
var h = new Person('Hans');
console.log(typeof h);   // 'object'
console.log(h instanceof Person);   // true
