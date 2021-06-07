// Demonstrate how Javascript handle asynchronous callbacks

// long running function (模擬需要花長時間動作的函數)
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) { }
  console.log('finished function')  
}

function clickhandler() {
  console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickhandler);

waitThreeSeconds();
console.log('finished execution');

// 會依序印出
// finished function
// finished execution
// click event!