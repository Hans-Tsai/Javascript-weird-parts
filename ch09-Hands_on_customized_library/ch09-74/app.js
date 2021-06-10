// 以下需在瀏覽器 Javascript Engine 才能看到
var g = G$('Hans', 'Tsai');
console.log(g);   // Greetr.init {firstName: "Hans", lastName: "Tsai", language: "en"}
g.greet();   // Hello Hans!
g.greet().greet(true);   // Greeting, Hans Tsai
g.greet().setLang('es').greet(true);   // Saludos, Hans Tsai
// g.greet().setLang('fr').greet(true);   // 報錯: Invalid language

// 在 login 按鈕上設定一個能觸發的點擊事件 (click event)
$('#login').click(function () {
    // 模擬從資料庫回傳的使用者姓名，並透過我們寫的客製化打招呼函式庫 (G$) 來建立出一個新物件 (loginGrtr)
    var loginGrtr = G$('Hans', 'Tsai');
    // 將使用者介面先隱藏起來
    $('#logindiv').hide();
    // 依據在下拉式選單上選擇的語言，來決定要打招呼要用的語言
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});