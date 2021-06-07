// 閉包 (closure) example: let、IIFE

/** 展示閉包 (closure) & 自由變數 (free variable) */
function buildFunctions () {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
        );
    }
    return arr;
}

var fs = buildFunctions();
fs[0]();   // 3
fs[1]();   // 3
fs[2]();   // 3

/** 解決自由變數的值，應隨著各匿名函數的執行環境變化
 * @note 方法一: 使用 ES6 的新語法，let 關鍵字來宣告 i
 */
function buildFunctions2 () {
    var arr = [];
    // 用 let 關鍵字來宣告 i 變數，可以將 i 的變數範圍限制在 for 迴圈的大括弧內才能取用
    for (let i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
        );
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();   // 3
fs2[1]();   // 2
fs2[2]();   // 1

/** 解決自由變數的值，應隨著各匿名函數的執行環境變化
 * @description: 為了保存不同 i 的值，我們會需要不同的執行環境(execution context)放進陣列，而獲得執行環境唯一的方法就是執行函數
 * @note 方法二: 使用 ES6 的新語法，利用 立即呼叫的函數表示式(IIFE) 來建立一個更大的新執行環境(execution context)來包住當下的 i 變數值
 */
 function buildFunctions3 () {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            // 用 IIFE 語法可以讓 Javascript Engine 不用到 for 迴圈的外部環境參考 i，只要參考自己的執行環境中的 j 變數值就可以了
            // j 的值會在 for 迴圈執行時儲存 => 這就是利用閉包的特性，來確保在下面呼叫時 執行內部函數會是正確的值
            (function (j) {
                return () => console.log(j);
            }(i))
        );
    }
    return arr;
}

var fs3 = buildFunctions3();
fs3[0]();   // 3
fs3[1]();   // 2
fs3[2]();   // 1