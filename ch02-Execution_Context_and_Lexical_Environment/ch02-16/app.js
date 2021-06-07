// 範圍鏈 (scope chain) --- 基礎範例

function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}
                                                           
var myVar = 1;
a();

// 會印出
// 1