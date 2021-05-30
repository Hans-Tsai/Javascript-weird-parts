// 偽裝命名空間 (Pretended Namespace)

var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);   // Hola!

var english = {};
var spanish = {};

// 因為這是兩個不同物件的屬性，因此它們不會互相衝突，也不會互相覆寫
english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english);   // { greet: 'Hello!' }
console.log(spanish);   // { greet: 'Hola!' }

