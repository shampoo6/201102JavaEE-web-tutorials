
// reduce ：是一个大数据统计算法

// 例如：我们要统计以下数据的总分数
let scores = [
    {
        name: '语文',
        score: 60
    },
    {
        name: '数学',
        score: 98
    },
    {
        name: '英语',
        score: 90
    }
]

// reduce方法接收一个参数，该参数是个函数
// 该参数函数接收两个参数
// 第一个参数，代表上一轮的统计结果
// 第二个参数，代表当前遍历到的数组对象
scores.reduce((r, item) => {
    return {
        name: '总分',
        score: r.score + item.score
    }
})
