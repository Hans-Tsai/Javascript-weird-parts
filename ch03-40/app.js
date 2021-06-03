// 重載函數 (function overloading) --- Javascript 並沒有這個概念

/** 通用模式處理
 * @note 在一般的狀況，若參數值得狀況很多樣，並且要讓函式判別遇到不同參數，需要做出不同的處理過程，可以針對傳入參數做判斷
 */
function greet (firstName, lastName, language) {
    language = language || 'English';

    if (language === 'English') console.log(`Hello ${firstName} ${lastName}`);
    if (language === 'Spanish') console.log(`Hola ${firstName} ${lastName}`);
}

greet('Hans', 'Tsai', 'English');   // Hello Hans Tsai
greet('Hans', 'Tsai', 'Spanish');   // Hola Hans Tsai

/** 為了簡化呼叫時的傳入資訊，可以改寫成額外新增兩個函式，在其中去執行呼叫不同傳入參數的函式 */
function greetEnglish(firstName, lastName) {
    greet(firstName, lastName, 'English');
}

function greetSpanish(firstName, lastName) {
    greet(firstName, lastName, 'Spanish');
}

greetEnglish('Hans', 'Tsai');   // Hello Hans Tsai
greetSpanish('Hans', 'Tsai');   // Hola Hans Tsai