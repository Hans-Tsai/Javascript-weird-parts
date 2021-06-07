// 傳值 (by value) & 傳址 (by reference)

/** by value */
var a = 3;
var b;

b = a;
console.log(a);   // 3
console.log(b);   // 3

a = 2;   // mutate
console.log(a);   // 2
console.log(b);   // 3

/** by reference */
var c = { greeting: 'hi' };
var d;

d = c;
console.log(c);   // { greeting: 'hi' }
console.log(d);   // { greeting: 'hi' }

c.greeting = 'hello';   // mutate
console.log(c);   // { greeting: 'hello' }
console.log(d);   // { greeting: 'hello' }

/** another by reference example (even as parameters) */
function changeGreeting (obj) {
    obj.greeting = 'Hola';
}

changeGreeting(d);
console.log(c);   // { greeting: 'Hola' }
console.log(d);   // { greeting: 'Hola' }

/** equals operator sets up new memory space (new address) */
c = { greeting: 'howdy' };
console.log(c);   // { greeting: 'howdy' }
console.log(d);   // { greeting: 'Hola' }