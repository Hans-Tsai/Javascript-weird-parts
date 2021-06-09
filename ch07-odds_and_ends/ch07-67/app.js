// 嚴謹模式 (strict mode)

// 'use strict';

/** 錯誤示範: 當我們拼字錯誤，但不在嚴謹模式下，並不會報錯，因為 Javascript Engine 會以為我們是要宣告新的變數 persom ，其值為空物件 {} 
 * @note 這時候若我們將 'use strict'; 打開，就會報錯 --- ReferenceError: persom is not defined
*/
var person;
persom = {};
console.log(persom);   // {}

/** 可將嚴謹模式的宣告加在函數內部的最上面，表示嚴謹模式只適用於這個函數而已，而不是整個程式碼 */
function logNewPerson() {
    'use strict';

    var person2;
    persom2 = {};
    console.log(persom2);   
}
// logNewPerson();   // ReferenceError: persom2 is not defined