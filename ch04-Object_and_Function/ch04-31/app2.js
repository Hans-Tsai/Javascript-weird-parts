// 物件實體語法 (Object literal syntax) --- 進階篇

var Hans = { 
  firstName: 'Hans', 
  lastName: 'Tsai',
  address: {
    street: '111 Main St. ',
    city: 'New York',
    state: 'NY',
  },
};

function greet (person) {
  console.log('Hi, ' + person.firstName);  
}

greet(Hans);   // Hi, Hans
greet({ 
  firstName: 'Mary', 
  lastName: 'Doe',
});   // Hi, Mary