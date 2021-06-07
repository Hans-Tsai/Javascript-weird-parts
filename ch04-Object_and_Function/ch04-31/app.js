// 物件實體語法 (Object literal syntax) --- 基礎篇

var person = { 
  firstName: 'Hans', 
  lastName: 'Tsai',
  address: {
    street: '111 Main St. ',
    city: 'New York',
    state: 'NY',
  },
};   // 較推薦此寫法，因為易讀性較高
console.log(person);   // { firstName: 'Hans', lastName: 'Tsai' }

// 也可以用傳統的方法
var person2 = new Object();   // 正常來說，不建議使用這個方法來建立新物件
person2.firstName = 'Eric';
person2.lastName = 'Chen';
console.log(person2);   // { firstName: 'Eric', lastName: 'Chen' }