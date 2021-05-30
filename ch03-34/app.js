// 一級函數 (first class functions)

function greet () {
    console.log('hi!');
}

greet.language = 'english';
console.log(greet.name);   // greet
console.log(greet.language);   // english