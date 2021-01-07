// 辅助函数

// 查询选择器
function qs(selector) {
    return document.querySelector(selector)
}

// 阻止冒泡和屏蔽默认事件
function stopDefaultEvent(event) {
    event.stopPropagation()
    event.preventDefault()
}

// 返回上一页面
function back() {
    location.href = './index.html'
}