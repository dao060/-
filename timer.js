console.time('循环计时');
// 第一次循环结束时
var timerImmediate = setImmediate(() => {
    console.log('immediate 定时器');
});

var timerTimeOut = setTimeout(() => {
    console.log('timer 定时器');
}, 100);

var count = 0;

var timerInterval = setInterval(() => {
    console.log('interval定时器');
    count++;
    if(count > 4) {
        clearInterval(timerInterval);
        console.timeEnd('循环计时');
    }
}, 100);

console.log('测试代码');