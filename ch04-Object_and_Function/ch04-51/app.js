// 函數程式設計 (functional programming)

/** 函數程式設計
 * @description 利用一級函數的特性，分割我的程式碼，用更簡潔的方法，這使我們能夠寫出更簡潔的程式碼
 * @param arr 初始陣列
 * @param fn 要執行的函數表示式(function expression)
 */
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            // 遍歷傳入參數的陣列內的每個元素，都透過傳入參數的函數執行一遍
            fn(arr[i])
        );
    };
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);   // [1, 2, 3]

/** 原始寫法: 利用 for 迴圈遍歷原 arr1 陣列中的每個元素並乘以 2 後，儲存到新陣列 arr2 中 */
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
};
console.log(arr2);   // [2, 4, 6]

/** 函數程式設計: 利用 functional programming 的方式，遍歷原 arr1 陣列中的每個元素並乘以 2 後，儲存到新陣列 arr3 中 
 * @description 呼叫函數，傳入陣列，告訴他該對陣列做什麼
 * @note 這麼做是為了利用一級函數的特性，將原程式碼分割後，用更簡潔的方法來完成
*/
var arr3 = mapForEach(arr1, function (item) {
    return item * 2;
});
console.log(arr3);   // [2, 4, 6]

/** 透過函數程式設計，我們就能重複利用 mapForEach() 做不同的任務，只要傳入函數我們要執行的表示式(expression) */
var arr4 = mapForEach(arr1, function (item) {
    return item > 2;
});
console.log(arr4);   // [ false, false, true ]

var checkPastLimit = function (limiter, item) {
    // 檢查是否超過傳入的限制值
    return item > limiter;
};

/** 先設定好 limiter 的永久參數預設值
 * @description 因為 mapForEach() 函數內的 fn(arr[i]) 這段，表示傳入的函數只能傳入一個參數(=> 也就是 item) 
*/
var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr5);   // [ false, true, true ]

var checkPastLimitSimplified = function (limiter) {
    // 利用 Function.bind() 創造一個新的函數物件拷貝，並設定好第一個參數值為傳入的 limiter 的值，也就是 limiterCopied = limiter
    return function (limiterCopied, item) {
        return item > limiterCopied;
    }.bind(this, limiter);
};
/** checkPastLimitSimplified() 會回傳一個函數物件，被傳入 mapForEach() 函數中，其 limiter 參數預設值為傳入的 2 */
var arr6 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr6);   // [ false, false, true ]

