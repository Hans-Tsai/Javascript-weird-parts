// 框架小叮嚀: 函數工廠 (function factories)

/** 建立一個可以共用、重複使用的函數工廠 */
function makeGreeting (language) {
    return function (firstName, lastName) {
        if (language === 'English') console.log(`Hello ${firstName} ${lastName}`);
        if (language === 'Spanish') console.log(`Hola ${firstName} ${lastName}`);
    }
}

/** 即使以下兩個函數的詞彙環境(lexical environment)相同，在相同的 makeGreeting() 函數中，
 * 但他們還是會指向不同的記憶體位置，因為他們在兩個不同的執行環境被創造
 */
var greetEnglish = makeGreeting('English');
var greetSpanish = makeGreeting('Spanish');

greetEnglish('Hans', 'Tsai');
greetSpanish('Hans', 'Tsai');