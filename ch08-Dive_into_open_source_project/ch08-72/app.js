// 深入探索知名的 Javascript 函式庫 --- jQuery.js (part3)
/** 當我們要利用 Node.js 執行時，才需要匯入以下這段程式碼 */
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

/** jQuery 這個函式庫的本質是用來幫我們解析 DOM 物件的樹狀結構 
 * @description 這裡的 q 物件就是標準的瀏覽器元素
 * @note 方法鏈結(method chaining): 呼叫一個又一個的函數，同時每個函數都會影響到母物件
*/
var q = $("ul.people").addClass("newClass").removeClass("people");
console.log(q);   // jQuery.fn.init [ul.newclass, prevObject: jQuery.fn.init(1)]，要到 Chrome 瀏覽器上的 console 才看得到
                    // 而在 Node.js 執行的話，會得到
                    // jQuery {
                    //     length: 0,
                    //     prevObject: jQuery {
                    //       '0': Document {
                    //         location: [Getter/Setter],
                    //         [Symbol(SameObject caches)]: [Object: null prototype]
                    //       },
                    //       length: 1
                    //     }
                    // }