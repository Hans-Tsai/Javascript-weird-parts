// var libraryName = 'Lib 2';   // 正常寫法

window.libraryName = window.libraryName || 'Lib 2';   // 較安全的寫法，以避免全域環境中的變數互相衝突
