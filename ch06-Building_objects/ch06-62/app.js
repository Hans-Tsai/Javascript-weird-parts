// 陣列 (array)、for ... in 物件(object) 該注意的地方

/** 請記住! 在 Javascript ，廣義來說，陣列 (array) 也是一種物件 (object) 
 * @note 用 for itemKey in 物件 (object) 會遍歷出陣列 (array) 的所有屬性，這樣並不安全!
*/
var arr = ['Hans', 'Eric', 'Amy'];
Array.prototype.myCustomProp = 'cool';
for (const itemKey in arr) {
    console.log(`${itemKey}: ${arr[itemKey]}`);   // 0: Hans、1: Eric、2: Amy、myCustomProp: cool
    console.log(itemKey);   // 0, 1, 2, myCustomProp
};

/** 建議用一般的 for 迴圈來遍歷陣列就好，就不會遍歷出陣列的所有屬性，這樣會比較安全!
 * @note 因為陣列 (array) 也是一種物件 (object)，而我們上面宣告的陣列成員是被增加的屬性，我們應該要避免遍歷出陣列的原型屬性、方法
 */
for (var i = 0; i < arr.length; i++) {
    console.log(`${i}: ${arr[i]}`);   // 0: Hans、1: Eric、2: Amy
    console.log(i);   // 0, 1, 2
};
