// Javascript Engine 自動給定的 參數(arguments) 關鍵字(keyword)、剩餘運算子(rest operator)

/** Function.arguments */
function greet (firstName, lastName, language, ...other) {
    language = language || 'en';
    if (arguments.length === 0) { 
        console.log('Missing parameters!');
        return;   // 當函數的參數陣列長度為 0 時，可以利用這個 return 關鍵字會將我們踢出 greet() 函數，就不會繼續印出第 10 行之後的變數值
    };

    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);
    console.log(`language: ${language}`);
    // console.log(arguments);   // 這是 Javascript Engine 自動設定好的關鍵字 Function.arguments
    console.log(`arg 0: ${arguments[0]}`);   // arg 0: Hans
}

// greet();   // firstName: undefined, lastName: undefined, language: en
// greet('Hans');   // firstName: Hans, lastName: undefined, language: en
// greet('Hans', 'Tsai');   // firstName: Hans, lastName: Tsai, language: en
greet('Hans', 'Tsai', 'zh-tw', '111 Main St.', 'Taipei');   // firstName: Hans, lastName: Tsai, language: zh-tw

/** rest operator */
function greet2 (firstName, lastName, language, ...other) {
    console.log(other);
}

greet2('Hans', 'Tsai', 'zh-tw', '111 Main St.', 'Taipei');   // other: [ '111 Main St.', 'Taipei' ]