// 函數程式設計 (functional programming) --- Underscore.js、Lodash.js 實戰篇
const _ = require('lodash');

var arr1 = [1, 2, 3];

/** Lodash.js 的 _.map() */
var arr2 = _.map(arr1, function (item) {
    return item * 3;
})
console.log(arr2);   // [3, 6, 9]

/** Lodash.js 的 _.filter() */
var arr3 = _.filter([2, 3, 4, 5, 6, 7], function (item) {
    return item % 2 === 0;
});
console.log(arr3);   // [2, 4, 6]