// 語法解析器 (syntax parser) 的自動插入分號 (automatic semicolon insertion) 功能

/** 當 return 關鍵字後面加上一個 carriage return (= enter 鍵)，語法解析器會自動補上分號(;) */
function getPerson () {
    return   // 離開函數
    {
        firstName: 'Hans'
    }
}

console.log(getPerson());   // undefined

/** 正確寫法 */
function getPerson2 () {
    return {
        firstName: 'John'
    }
}

console.log(getPerson2());   // { firstName: 'John' }