// 物件(Object)
// 計算取用成員運算子(computed member access, 也就是中括弧 Object[...] )
// 取用成員運算子(member access, 也就是點 Object.xxx )

var person = new Object();   // 正常來說，不建議使用這個方法來建立新物件

person['firstName'] = 'Hans';
person['lastName'] = 'Tsai';

var firstNameProperty = 'firstName';
console.log(person);
console.log(person[firstNameProperty]);   // Hans
console.log(person.firstName);   // Hans
console.log(person.lastName);   // Tsai

person.address = new Object();
person.address.street = '111 Main St. ';
console.log(person);      // {
                          //   firstName: 'Hans',
                          //   lastName: 'Tsai',
                          //   address: { street: '111 Main St. ' }
                          // }