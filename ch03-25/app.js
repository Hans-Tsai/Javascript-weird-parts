// 比較運算子(Comparison operators)

console.log(1 < 2 < 3);   // true
console.log(3 < 2 < 1);   // true，因為相當於印出 false < 1
console.log(Number(true));   // 1
console.log(Number(false));  // 0
console.log(Number(undefined));   // NaN (Not a Number，表示不是數字，在 Javascript 中不算是一種純值)
console.log(Number(null));   // 0
console.log('3' == 3);   // true   (相等運算子會將變數強制轉型再做比較)
console.log('3' === 3);   // false  (嚴格相等運算子'不會'將變數強制轉型再做比較)
console.log(false == 0);   // true   
console.log(false === 0);   // false
console.log(null < 1);   // true   (正常來說，null 會被轉型為 0，再做比較)
console.log(null == 0);   // false  (但在某些情況下，例如: 相等運算子的時候，null 便不會被強制轉型)
console.log("" == 0);   // true