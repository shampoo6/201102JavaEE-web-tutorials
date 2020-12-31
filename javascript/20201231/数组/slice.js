let arr = [
    {
        id: 0,
        x: 1,
        y: 2
    },
    {
        id: 1,
        x: 3,
        y: 4
    },
    {
        id: 2,
        x: 5,
        y: 6
    }
]

// slice：作用是获取当前数组的一个子数组的浅表复制
// 语法：arr.slice(start, end)
// start: 开始截取子数组的位置
// end：结束截取子数组的位置
// 前截后不截
console.log(arr.slice(1, 2))

// slice 第二个参数可以不填，代表的是从start开始，截取到最后
console.log(arr.slice(1))