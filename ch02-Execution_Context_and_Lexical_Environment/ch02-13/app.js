// 單執行緒 (single threaded) & 同步執行 (synchronous execution)

// 單執行緒(single threaded): 這表示一次執行一個指令。
// 例如: 每個程式都會有一堆指令，在程式碼裡有一堆指令; 而單執行緒表示我們一次只能執行一個指令。

// 當我們在使用瀏覽器的時候，要知道Javascript並不是瀏覽器唯一的東西。
// 因此，當我們說Javascript是單執行緒的時候，不是指瀏覽器，＝是從我們的角度來看的，Javascript 一次只做一件事。

// 同步執行(synchronous execution): 意思是對程式語言來說，一次一個，"而不是"一次兩個 or 一次三個。
// 也就是程式碼的其中一行，一次執行一個，而且是照順序的。所以程式碼會依照出現的順序，一次執行一行。

// 單執行緒(single threaded) & 同步執行(synchronous execution) 的綜合比較
  // 結論一: 這表示Javascript中一次只會發生一件事。
  // 結論二: Javascript是單執行緒和同步執行的。