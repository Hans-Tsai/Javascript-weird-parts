// 立即呼叫的函數表示式(IIFE)擁有自己的執行環境(execution context)，而不受全域執行環境(global execution context)所影響

/** IIFE
 * @note 這段程式碼範例需要透過瀏覽器才能執行，無法利用 Node.js 來執行
 */
(function (global, name) {
    var greeting = 'Hello';
    // global.greeting = 'Global Hello';   // 覆寫全域執行環境 greeting 變數值
    console.log(`${greeting} ${name}`);
}(window, 'Hans'))

/** 因為受到 greet.js 所宣告的全域變數值所影響，greeting 的變數值仍以全域變數環境(global execution context)的為準 */
console.log(greeting);   // Hola (要利用瀏覽器 console 查看才行)
// console.log(greeting);   // Global Hello