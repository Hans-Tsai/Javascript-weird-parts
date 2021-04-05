// Javascript獨有的提升(hoisting)特性僅會事先"宣告變數與函數"，而"不會"事先賦值給變數

b();   // 回傳 Called b!
console.log(a);   // a = undefined

var a = 'Hello World!';

function b() {
  console.log('Called b!');
}

// b();
// console.log(a);