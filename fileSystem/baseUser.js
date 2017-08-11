//  引入模块
const fs = require('fs');
//  const path = require('path');
const { URL, URLSearchParams } = require('url');

const fileUrl = new URL('file:///'+__filename);
console.log(fileUrl);
console.log(fs.readFileSync(fileUrl)); // 读取文件内容
const w = fs.watch(fileUrl, (enentType, filename) => { // 监听当前文件
    console.log(enentType); // 触发事件的类型
    console.log(filename);  // 触发事件的文件
});
console.log(w);
const Wf = fs.watchFile(fileUrl, (curr, pre) => {
    console.log(curr); // 当前
    console.log(pre);
});

console.log(Wf); //