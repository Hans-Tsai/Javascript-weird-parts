// Javascript 的執行階段，會逐行執行

function b() {
  console.log('Called b!')
};

b();

console.log(a);

var a = 'Hello World!';

console.log(a);

// 會依序印出
// Called b!
// undefined
// Hello, World!