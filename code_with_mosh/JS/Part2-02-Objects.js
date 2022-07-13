// 复习创建object的方法

// 1. object literal
// 2. Factory function
// 3. Constructor function

// Gettes and setters

// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = {x:0, y:0}
//     this.draw = function () {
//         console.log('draw');
//     };
//     // 第一个参数指定要添加属性的对象
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function () {
//             return defaultLocation;
//         },
//         set: function (value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location');
//             defaultLocation = value;
//         }
//     });
// }

// const circle = new Circle(10);
// // 报错 'Invalid Location'
// circle.defaultLocation = 1;
// circle.draw();

// Exercise StopWatch

function StopWatch() {
    let counting = false;
    let countingStopped = false;
    // 开始计时以后直到下一次reset，counting和countingStopped是互斥的状态
    let startTime=0;
    let stopTime=0;
    let duration = 0;
    this.start = function() {
        if (!counting) {
            startTime = new Date();
            counting = true;
            // 注意counting和countingStopped是互斥状态
            countingStopped = false;
        }
        else 
            throw new Error('已经开始计时了');
    };
    this.stop = function () {
        if (!countingStopped) {
            stopTime = new Date();
            countingStopped = true;
            // 注意counting和countingStopped是互斥状态
            counting = false;
        }
        else 
            throw new Error('还没有开始计时');
    };
    this.reset = function () {
        counting = false;
        countingStopped = false;
        startTime = 0;
        stopTime = 0;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function() {
            // TODO duration 目前不能检测是否已经经过了一个完整的计时周期
            // TODO 已解决
            // 一次完整计时结束
            if (countingStopped && !counting) {
                duration = (stopTime-startTime) / 1000;
                return duration;
            }
            // 开始计时但是还没结束
            else if (counting && !countingStopped) 
                throw new Error('还没结束计时');
            // 第一次计时未开始
            else if (!counting && !countingStopped) 
                throw new Error('还没开始计时');
            // 不存在 counting && countingStopped的状态，既正在计时又停止计时的状态
        }
    });
}