// 基本物件 (Object): 是所有物件的參考的原型鏈頂點

/** 在 Javascript 中，不管是純值 (primitive) 或物件 (object)，都會有原型 (prototype) */
var a = {};
var b = function () { };
var c = [];
var d = 1;
var e = 'Hello';
var f = true;

/** 在 Javascript 中，所有東西不管是純值 (primitive) 或物件 (object) 的原型鏈頂點都會指向基本物件 (Object) */
console.log(a.toString());   // '[object Object]'
console.log(b.toString());   // 'function () { }'
console.log(c.toString());   // ''
console.log(d.toString());   // '1'
console.log(e.toString());   // 'Hello'
console.log(f.toString());   // 'true'