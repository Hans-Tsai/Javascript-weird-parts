// 語法解析器 (syntax parser): 空白字元 (whitespace characters, e.g. carriage return、tab、whitespace)

/** 語法解析器會自動跳過註解、所有空白字元 */
var 
    // first name of the person
    firstName,

    // last name of the person
    lastName,

    // the language
    // can be 'English' or 'Spanish'
    language;

var person = {
    // the first name
    firstName: 'Hans',

    // the last name
    // always required
    lastName: 'Tsai',
}

console.log(person);   // { firstName: 'Hans', lastName: 'Tsai' }