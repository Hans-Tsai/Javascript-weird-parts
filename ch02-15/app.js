// 變數環境(variable environment)、範圍(scope)

function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(`after a(): myVar = ${myVar}`);

// 會依序印出
// 1
// 2
// undefined
// after a(): myVar = 1