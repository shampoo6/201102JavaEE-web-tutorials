// 假装有个用户数据列表如下：
let userInfos = [
    {
        name: '小明',
        pwd: 'fjfjfjfjfj',
        balance: 250,
        info: 555
    },
    {
        name: '小王',
        pwd: '666666',
        balance: 1234,
        info: '消息'
    },
    {
        name: '小李',
        pwd: '888888',
        balance: 1024,
        info: { x: 1, y: 2 }
    }
]

// 使用 every 遍历数组（中途可以跳出）
// userInfos.every((item, index) => {
//     if (item.name === '小王') {
//         return false // 返回false相当于java 中的break
//     }
//     console.log(item)
//     console.log(index)
//     return true // 返回true 相当于java中的continue
// })

// 使用 forEach 遍历数组（中途不能跳出）
// userInfos.forEach((item, index) => {
//     console.log(item)
//     console.log(index)
// })

// 使用 map 遍历数组，提取数组元素，构建新数组
let newArr = userInfos.map((item, index) => {
    console.log(item)
    console.log(index)
    // 每个元素，提供一个返回值，该值将被记录进新的数组，例如此处的newArr
    return {
        id: index,
        pwd: item.pwd
    }
})

console.log(newArr)

// sort 排序
userInfos.sort((x1, x2) => {
    let x1Type = typeof x1.info
    let x2Type = typeof x2.info
    switch (x1Type) {
        case 'number':
            switch (x2Type) {
                case 'number':
                    return 0
                case 'string':
                case 'object':
                    return 1
            }
            break
        case 'string':
            switch (x2Type) {
                case 'number':
                    return -1
                case 'string':
                    return 0
                case 'object':
                    return 1
            }
            break
        case 'object':
            switch (x2Type) {
                case 'number':
                case 'string':
                    return -1
                case 'object':
                    return 0
            }
            break
        default: return 0
    }
})