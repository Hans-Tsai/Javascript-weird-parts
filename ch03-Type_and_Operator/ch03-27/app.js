// 存在 (Existence) & 布林 (Boolean) --- 強制轉型 (coercion) 的優點

console.log(Boolean(undefined));   // false
console.log(Boolean(null));   // false
console.log(Boolean(''));   // false

var a;
// a = null;
// a = '';

if (a) {
  console.log('a is there.');   // 不會執行到這行
}

var b = 0;
if (b || b === 0) {
  console.log('b is there.');   // 會執行到這行
}