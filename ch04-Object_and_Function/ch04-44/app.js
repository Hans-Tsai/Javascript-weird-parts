// 立即呼叫的函數表示式 (Immediately Invoked Function Expression, IIFE)

/** function statement */
function greet (name) {
    console.log(`Hello ${name}`);
}
greet('Hans');   // Hello Hans

/** using a function expression */
var greetFunc = function greet (name) {
    console.log(`Hello ${name}`);
};
greetFunc('Hans');   // Hello Hans

/** using an Immediately Invoked Function Expression (IIFE) */
var greeting = function greet (name) {
    return `Hello ${name}`;
}('Hans'); 
console.log(greeting);   // Hello Hans
console.log(typeof greeting);   // string，注意利用 IIFE 語法呼叫後，會將 return 的結果儲存在 greeting 這個變數中，該值的型別為 string

/** 實戰中 IIFE 常見的寫法 */
var firstName = 'Hans';
(function (name) {
    console.log(`Inside IIFE: Hello ${name}`);
}(firstName));   // Inside IIFE: Hello Hans

/** 也可以在小括弧外面再呼叫函數 */
var firstName = 'Eric';
(function (name) {
    console.log(`Inside IIFE: Hello ${name}`);
})(firstName);   // Inside IIFE: Hello Eric