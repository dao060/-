const url = require('url');

const addr = 'https://user:pass@sub.host.com:8080/p/a新/t/h?query=string#hash';
const urlObject = url.parse(addr); // 传统方法获取urlObject对象

console.log('urlObject对象');
console.log(urlObject);
console.log(urlObject.auth);  // 获取或设置用户名或密码string
console.log(urlObject.hash);  // 获取或设置锚点
console.log(urlObject.host);  // 获取或设置主机名包含端口号
console.log(urlObject.hostname); // 不包含端口号
console.log(urlObject.href); // 类似于urlObject.toString()/toJSON() 转换对象为字符串url
console.log(urlObject.path);  // 获取路径包含查询字符串，不会对路径解码
console.log(urlObject.pathname);  // 获取路径包含查询字符串，不会对路径解不包含查询字符串
console.log(urlObject.protocol);  // 获取或设置协议名
console.log(urlObject.query);  // 获取或设置查询字符串不含问号
console.log(urlObject.search);  // 获取或设置查询字符串含问号
console.log(url.format(urlObject));  // 获取或设置查询字符串含问号
console.log(urlObject.slashes);  // 判断protocol后是否是两个 '//' 真为true

// api
console.log(url.resolve('http://www.baidu.com', '/to'))