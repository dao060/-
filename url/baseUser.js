// WHATWG URL 在浏览器中全局可用
const { URL } = require('url');

// 将url 创建成对象
const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(myURL);

// 通过nodejs API 解析url
const url = require('url');

const demo = 'http://www.baidu.com';

console.log(url.parse(demo));