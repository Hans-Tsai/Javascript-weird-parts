// 運算子優先性(Operator precedence)、運算子相依性(Operator associativity)---進階範例

var a = 2, b = 3, c = 4;
a = b = c;

console.log(a);  // 4
console.log(b);  // 4
console.log(c);  // 4

// 因為指派運算子(assignment operators)的相依性是右相依性