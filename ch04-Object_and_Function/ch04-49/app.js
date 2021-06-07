// 閉包 (closure) & 回呼函數 (callback function)

/** 利用閉包、函數表示式、一級函數 */
function sayHiLater() {
    var greeting = 'Hi';
    setTimeout(function () {
        console.log(greeting);
    }, 3000)
}

sayHiLater();   // 經過 3 秒後會印出 Hi

/** 建立一個可以回呼的函數 */
function tellMeWhenDone (callback) {
    var a = 1000;   // some work
    var b = 2000;   // some work
    callback();   // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function () {
    console.log('I am done!');
});

tellMeWhenDone(function () {
    console.log('All done...');
});