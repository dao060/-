const HTTP = require('http');

// 主机名端口号
const PORT = 8800;
const HOSTNAME = '127.0.0.1';

// 创建服务器
const SERVER = HTTP.createServer((req, res) => {

    console.log('创建服务器');
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

});

// 启动服务器监听
SERVER.listen(8088, '127.0.0.1', () => {
    console.log('服务器已经启动');
    console.log(__dirname); // 没有后缀
    console.log(__filename); // 有后缀
});
console.log(SERVER);
