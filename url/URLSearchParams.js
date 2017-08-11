// 实例化URLSearchParams对象
const { URL, URLSearchParams } = require('url');
const myUrl = new URL('https://user:pass@sub.host.com:8080/p/a新/t/h?query=string&name=xiaoming&age=12#hash');

myUrl.searchParams.append('xiaoming', '12'); // 插入查询字符串
myUrl.searchParams.delete('xiaoming');  // 删除查询字符串

console.log(myUrl.searchParams.toString());  // 获取查询字符串
console.log(myUrl.searchParams.get('query')); // 获取查询字符串

// 实例化对象
const params =
    new URLSearchParams(myUrl.searchParams);

console.log(params.toString());

// 利用sort方法排序
params.sort();
console.log(params.toString());
console.log('key数组');
console.log(params.keys()); // 需要查询的值
console.log('entries对象');
console.log(params.entries()); // 将查询字符串包装成迭代对象对
console.log(params.values()); // 查询值对象

params.append('foo', 'asb');
params.append('foo', 'asb');
params.append('foo', 'asb');
console.log(params.toString());
params.set('foo', 'new'); // 会删除重复的
console.log(params.getAll('foo'));
console.log('原型');
console.log(URL.prototype);
console.log(myUrl.pathname); // 会