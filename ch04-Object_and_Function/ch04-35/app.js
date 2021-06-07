// 函數陳述句 (function statements) & 函數表示式 (function expressions)

greet();   // hi
/** function statements */
function greet () {
    console.log('hi');
}

console.log(anonymousGreet);   // undefined
// anonymousGreet();   // TypeError: anonymousGreet is not a function
/** function expressions */
var anonymousGreet = function () {
    console.log('hi');
}
anonymousGreet();   // hi

function log (a) {
    // console.log(a);
    a();
}

// log(3);   // 3
// log('Hello');   // Hello
// log({ greeting: 'hi' });   // { greeting: 'hi' }
log(function () {
    console.log('anonymous function');
});   // ƒ () { console.log('anonymous function'); }