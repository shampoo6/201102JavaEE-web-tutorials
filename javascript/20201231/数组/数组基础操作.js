
// 数组
// 数组是一个可以存放多个数据的集合，并且可以动态调整集合的大小
// js数组相当于java中的list

// 回顾：什么东西相当于java中的map? 是json对象

// 定义数组
let arr = new Array() // 已类型形式，实例化一个数组
arr = [] // 使用一对括号可以声明一个数组，等价于 new Array()

// 定义并初始化数组
arr = new Array({ a: 1, b: 2 }, '你好', 5544)
// 使用方括号声明数组，并在其中填入初始值，多个值用逗号隔开
arr = [{ a: 1, b: 2 }, '你好', 5544]

// 赋值 取值
// 赋值：使用索引（下标）进行赋值
// 什么是索引（index）？索引是数组给每个元素分配的编号，从零开始，依序增加1
arr[0] = 123
console.log(arr)

// 取值：通过索引直接取值
console.log(arr[2])

// 取值如果超出编号范围，将获取到一个undefined
console.log(arr[3])

// js的数组可以自定义编号进行赋值

// -------------------------------------------------

// 数组的操作有哪些？

// push: 追加元素到数组的末尾
// 参数是要追加到数组中的数据
arr.push('hello world')
// 参数可以有多个，用逗号隔开
arr.push(1, 2, 3)

// pop: 取出数组末尾的元素
let result = arr.pop()
console.log(result)

// unshift: 在数组头部插入数据
arr.unshift('3322')
// 参数可以有多个，用逗号隔开
arr.unshift(1, 2, 3)

// shift: 从数组头部取出数据
arr.shift()

// 获取数组长度
console.log(arr.length)

// concat: 连结数组，在原有数组基础上，加上后续加入的元素，或后续参数数组中的元素，最后返回一个新数组
// 参数是另一个数组，或元素，可以有多个
arr = arr.concat([4, 5, 6])
// concat可以用于深度拷贝数组

function temp(_arr) {
    for (let i = 0; i < _arr.length; i++) {
        _arr[i] = _arr[i] + 1
    }
}

let arr2 = [1, 2, 3]
// let arr3 = arr2 // 浅表复制 本质是直接将引用赋值给了arr3
let arr3 = arr2.concat([]) // 深度复制
temp(arr3)
console.log(arr2)

// join：拼接数组成为一个字符串
let arr4 = ['hello', 'world', '!!!']
// 参数是连结数组元素时使用的连结符号
console.log(arr4.join('-'))

// let sb = new StringBuilder()
// sb.append('sdfsdf')
// sb.append('sdfsdf')
// sb.append('sdfsdf')
// sb.toString()

// 可以使用join进行类似java StringBuilder的操作
let sb = []
sb.push('sdfgarewf')
sb.push('dfg')
sb.push('sdrthsrthgfgarewf')
sb.join('')

// splice: 删除数组指定位置的元素，并可以用新元素进行替换
// 第一个参数：起始索引
// 第二个参数: 要删除的元素个数
// 第三个参数：删除以后在该位置上要插入的元素
arr.splice(4, 1, '你好么?')
console.log(arr)

// 如何清空数组？
arr.splice(0, arr.length)
