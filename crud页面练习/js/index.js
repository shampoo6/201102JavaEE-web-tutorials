// 初始化页面
init()

// 绑定事件
qs('.add').addEventListener('click', (e) => {
    stopDefaultEvent(e)
    location.href = './add.html'
})

// 编辑
function edit(id) {
    location.href = './edit.html?id=' + id
}

// 删除
function remove(id) {
    db.remove('account', id)
    location.reload()
}

function init() {
    let list = db.getList('account')
    let html = list.map(item => {
        return '<tr>' +
            '<td>' + item.id + '</td>' +
            '<td>' + item.account + '</td>' +
            '<td>' + item.pwd + '</td>' +
            '<td>' + item.nickName + '</td>' +
            '<td>' + item.balance + '</td>' +
            '<td>' + item.sign + '</td>' +
            '<td>' +
            '<button onclick="remove(' + item.id + ')">删除</button>' +
            '<button onclick="edit(' + item.id + ')">编辑</button>' +
            '</td>' +
            '</tr>'
    })
    qs('.table-content').innerHTML = html.join('')
}