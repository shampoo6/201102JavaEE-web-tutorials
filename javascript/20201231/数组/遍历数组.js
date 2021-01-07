// 假装有个用户数据列表如下：
let userInfos = [
    {
        name: '小王',
        pwd: '666666',
        balance: 1234,
        info: '消息'
    },
    {
        name: '小明',
        pwd: 'fjfjfjfjfj',
        balance: 250,
        info: 555
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

// 过滤数组
newArr = userInfos.filter((item, index) => {
    console.log(item)
    console.log(index)
    return true // 返回true：将当前元素加入新数组，否则就不加入
})

console.log(newArr)

// sort 排序
// 数组排序，有默认规则
// 字符串数组：按照英文字母顺序，将首字母进行排序
// 数字数组：将根据数字长度，大小进行排序
let arr = ['ysdfgdf', 'crtu', 'a46', 'bdyj', 'fuio']
arr = [1024, 1199, 256, 17, 2048]

// 自定义排序：

// 自定义规则如：object < string < number , 越小的元素，放在数组的越前面
// sort 函数的参数叫compare，该compare函数需要返回一个数字
// 返回值 如果小于零，就将item1排在item2的左边
// 如果大于零，就将item1排在item2的右边
// 如果等于零，保持item1和item2当前顺序不变
userInfos.sort((item1, item2) => {
    let type1 = typeof item1.info
    let type2 = typeof item2.info
    switch (type1) {
        case 'number':
            switch (type2) {
                case 'number':
                    return 0
                case 'string':
                case 'object':
                    return 1
            }
            break;
        case 'string':
            switch (type2) {
                case 'number':
                    return -1
                case 'string':
                    return 0
                case 'object':
                    return 1
            }
            break;
        case 'object':
            switch (type2) {
                case 'number':
                case 'string':
                    return -1
                case 'object':
                    return 0
            }
            break;
        default: return 0
    }
})

// 如何对userInfos的balance，进行从小到大的排序
userInfos.sort((item1, item2) => {
    if (item1.balance > item2.balance) {
        return 1
    }
    if (item1.balance < item2.balance) {
        return -1
    }
    return 0
})