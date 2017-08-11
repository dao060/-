const path = require('path');

console.log(__dirname);                  // 全局属性获取当前文件的路径不包含文件
console.log(__filename);                 // 全局属性获取当前文件的路径包含文件
console.log(path.basename(__filename)); // 获取文件名（只有文件名）
console.log(path.dirname(__filename));  // 获取文件径不包含文件名
console.log(path.delimiter);            // 获取分隔符
console.log(path.extname(__filename));  // 获取后缀
console.log(path.format({
  root: 'c:/config/root/',           // root 最后一项要加斜杠
  dir: 'c:/config/dir',              // dir 后不需要加斜杠 有dir时root不起作用
  base: 'file.txt'
}));
console.log(path.format({
    root: '/',    // 提供了dir root 不生效
    base: 'file.html', // 提供了base后 name和ext 不生效
    name: 'file', // 文件名称
    ext: '.txt'   // 文件后缀
}));
// 判断是否为绝对路径
console.log(path.isAbsolute('/fil/file')); // 前面有斜杠则为真 没有呀则为假
console.log(path.isAbsolute('fil/file')); // 前面有斜杠则为真 没有呀则为假
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux')); // 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
console.log(path.normalize('foo/con/fiad/dise/..'));       // 解析.. 和。
console.log(path.normalize('foo/con/fiad/dise/.'));       // 解析.. 和。
console.log(path.parse(__filename));  // 将路径字符串解析成对象
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')); // 从当前目录绝对路径解析其他目录相对路径
console.log(path.resolve()); // 不传参数会返回当前目录绝对路径
console.log(path.resolve('/foo/bar', './baz'));  // d: /foo/bar/baz
console.log(path.resolve('wwwroot', 'static/png/','../gif/img.gif'));
console.log(path.sep); // 平台路径分隔符
console.log(__filename.split(path.sep)); // 用来获得路径数组方便跨平台操作