// JSON & 物件實體語法 (Object literal syntax) 是不同的東西

var objectLiteral = {
    firstName: 'Mary',
    isAProgrammer: true,
};
console.log(objectLiteral);   // { firstName: 'Mary', isAProgrammer: true }

var JSONObject = JSON.stringify(objectLiteral);
console.log(JSONObject);   // '{"firstName":"Mary","isAProgrammer":true}' => 型別為 string

var JSONString = JSON.parse(JSONObject);
console.log(JSONString);   // { firstName: 'Mary', isAProgrammer: true }  => 型別為 object