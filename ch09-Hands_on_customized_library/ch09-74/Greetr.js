// Hands-on a customized  greeting library

/** 需求
 * @description 建構一個能客製化打招呼的小函式庫，可以選擇使用不同的語言，能分成普通、正式的打招呼兩種方式
 * @description 部分方法要是可鏈結的方法 (chainable method)
 * @description 可支援 jQuery 套件
 * @description 將這個客製化的打招呼函式庫所創造出來的新物件，使用 G$ 來作為別名，並且不用在每次建立新物件時都要寫出 new + 函數建構子
 * @description 必須能夠重複使用，且有彈性(e.g. 當我們不想再使用 jQuery 這個套件時，依然能用 $ 符號來呼叫這個函式庫創造出來的新物件)
 */
// 前面加上一個 ';' 號，是為了確保當這個函式庫的前面有先引入其它函式庫時，有可能在那些函式庫的結尾會忘記加入分號，而導致非預期的錯誤
;(function (global, $) {
    var Greetr = function (firstName, lastName, language) {
        // 回傳一個利用 new + 函數建構子 所建立出來的新物件，這樣就不需要每次都要用 new 關鍵字去設定新物件
        return new Greetr.init(firstName, lastName, language);
    };

    // 設定該函式庫能支援的語言有英文、西班牙文
    // 因為閉包 (closure) 的特性，而函數建構子 (Greetr.init) 的詞彙環境 (lexical environment) 是整個 IIFE 包住的範圍，因此就夠取用這個陣列的值
    var supportedLangs= ['en', 'es'];
    // 用物件 (object) 型別，而不是用陣列 (array) 型別，是因為我們之後會想要用 key/value 配對來參考到它們
    var greetings = {
        en: 'Hello',
        es: 'Hola',
    };
    var formalGreetings = {
        en: 'Greeting',
        es: 'Saludos',
    };
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
    };

    // 設定透過 Greetr 函數建構子所建立出來的新物件的原型 (prototype) 屬性、方法，以共享這些通用的屬性、方法，來節省記憶體空間
    Greetr.prototype = {
        // 取得使用者全名
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        // 驗證語言
        validate: function () {
            // supportedLangs 變數是一個隱蔽變數，也就是它不能在這個 IIFE 之外的範圍使用，但是在 IIFE 的閉包範圍內可以使用
            if (supportedLangs.indexOf(this.language) === -1 ) throw 'Invalid language';
        },
        // 普通的打招呼
        greeting: function () {
            return greetings[this.language] + ` ${this.firstName}!`;
        },
        // 正式的打招呼
        formalGreeting: function () {
            return formalGreetings[this.language] + `, ` + this.getFullName();
        },
        //#region 可鏈結的方法
        // 實作方法鏈結 (method chaining)，這樣就不用每次都要寫出是要普通 or 正式的打招呼
        greet: function (formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) console.log(msg);
            // 'this' 變數會參考到執行環境時呼叫此方法的那個物件，回傳 this 變數，這麼做可以讓方法鏈結 (method chaining)
            return this;
        },
        // 手動確認某個東西是否有被 log 出
        log: function () {
            if (console) {
                console.log(logMessages[this.language] + `: ` + this.getFullName());
            }
            return this;
        },
        // 設定語言
        setLang: function (lang) {
            // 將外傳的語言參數值 (language) 設定為當前物件的語言 (this.language)
            this.language = lang;
            // 還是要驗證該語言是否為可接受的語言
            this.validate();
            return this;
        },
        // 支援接受 jQuery 的選擇器 (selector)
        HTMLGreeting: function (selector, formal) {
            if (!$) throw 'jQuery not loaded';
            if (!selector) throw 'Missing jQuery selector';
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            $(selector).html(msg);
            return this;
        },

        //#endregion
    };

    // 宣告函數建構子
    Greetr.init = function (firstName, lastName, language) {
        // 為了安全，我們這邊可以先宣告一個 self 變數，相當於 this 變數的功用。這麼做就不需要擔心 this 變數會指向哪裡?
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        self.validate();
    };

    // 設定所有被 Greetr 函數建構子所建立出來的新物件的原型 (Greetr.init.prototype) 都必須指向 Greetr 物件的原型，作為原型鏈 (prototype chain)
    Greetr.init.prototype = Greetr.prototype;

    // 要讓一個東西在任何地方都能被取用，需要先將它、全域物件 (global object) 連結起來
    // 將 IIFE 區域內的 Greetr 函數物件設定為全域物件的同名函數 (global.Greetr)，並設定它的全域別名為 global.G$ 
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));