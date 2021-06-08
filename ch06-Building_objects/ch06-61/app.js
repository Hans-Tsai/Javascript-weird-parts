// Javascript 內建的函數建構子 (build-in function constructor) 該注意的地方!

/** 建議做法: 利用實體語法來創造純值 */
var a = 3;
/** 不建議做法: 利用函數建構子來創造純值 */
var b = new Number(3);
console.log(typeof a);   // number
console.log(typeof b);   // object

/** 因為相等運算子 (equality operator, ==) 會先將兩者的型別強制轉型 (coercion)，因此並不會比較兩者的型別 */
console.log(a == b);   // true
/** 但是嚴格相等運算子 (strict equality operator, ===) 會比較兩者的型別 */
console.log(a === b);   // false