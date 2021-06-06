// 閉包 (closure)

/** 閉包 (closure): 能確保當我們執行函數時，它能正常運作，可以取用到外部變數，而不需要在乎外部函數已經執行完畢了沒 */
function greet (whattosay) {
    return function (name) {
        console.log(`${whattosay} ${name}`);
    }
}

// greet('Hi')('Hans');
var sayHi = greet('Hi');
sayHi('Hans');
