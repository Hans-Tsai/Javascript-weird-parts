// 物件(objects)、函數(functions)、this 關鍵字(keyword)

console.log(this);   // this 會指向 global object

/** function statement */
function a () {
    console.log(this);
    this.newVariable = 'hello';
}

/** function expression */
var b = function b () {
    console.log(this);
}

a();   // this 會指向 global object
console.log(newVariable);   // hello
b();   // this 會指向 global object

var c = {
    name: 'The c object',
    log: function () {
        var self = this;   // 在這邊先宣告好 self 變數，因為這時候的 this 特殊變數會指向整個 c物件

        self.name = 'Updated c object';
        console.log(self);

        var setName = function (newName) {
            self.name = newName;
        };
        setName('Updated again! The c object');
        console.log(self);
    }
};

c.log();   // { name: 'The c object', log: [Function: log] }