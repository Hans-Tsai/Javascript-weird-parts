// Javascript 內建的函數建構子 (build-in function constructor)

/** 請記住! 函數建構子回傳的是一個"新物件(object)" */
String.prototype.isLengthGreaterThan = function (limiter) {
    return this.length > limiter;;
};
/** Javascript Engine 會自動將 "Hans" 字串轉換成物件型別，因此才能透過原型鏈呼叫 String 物件中自定義的 isLengthGreaterThan() 方法 */
console.log("Hans".isLengthGreaterThan());   // true

Number.prototype.isPositive = function () {
    return this > 0;
};

/** 錯誤示範!
 * @description 因為 Javascript Engine 並不會自動將數值轉換成物件型別
 */
// console.log(3.isPositive());   // 會報錯! Uncaught SyntaxError: Invalid or unexpected token

/** 正確解決方法
 * @description
 */
var a = new Number(3);
console.log(a.isPositive());   // true