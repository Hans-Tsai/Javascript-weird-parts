// 範圍鏈(scope chain)---進階範例

function a() {
  function b() {
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();

// 會印出
// 2