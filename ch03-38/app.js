// 陣列(Array): collections of anything

var arr = [
    1,
    false,
    {
        name: 'Hans',
        address: '111 Main St.',
    },
    function (name) {
        var greeting = 'Hello';
        console.log(`${greeting} ${name}`);
    },
    'hello',
];

console.log(arr);   // [ 1, false, { name: 'Hans', address: '111 Main St.' }, [Function (anonymous)], 'hello' ]
/** 我們也可以透過陣列索引來呼叫函數 */
arr[3](arr[2].name);   // Hello Hans