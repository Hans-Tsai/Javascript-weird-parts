// 預設值 (default value)

function greet (name) {
  name = name || 'Hans';   // 在 ES6 推出能設定函數的參數預設值之前，可以這樣寫，來設定參數的預設值
  console.log('Hello ' + name); 
}

greet('Tony');   // Hello Tony
greet();         // Hello Hans