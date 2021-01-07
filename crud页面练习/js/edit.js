// 初始化获取页面参数
init()

qs('.back').addEventListener('click', (e) => {
    stopDefaultEvent(e)
    back()
})

qs('.submit').addEventListener('click', (e) => {
    stopDefaultEvent(e)
    let data = {}
    data.id = Number(qs('form input[name=id]').value)
    data.account = qs('form input[name=account]').value
    data.pwd = qs('form input[name=pwd]').value
    data.nickName = qs('form input[name=nickName]').value
    data.balance = qs('form input[name=balance]').value
    data.sign = qs('form textarea[name=sign]').value
    db.update('account', data)
    location.href = './index.html'
})

function init() {
    // 获取页面传递的参数
    let id = Number(location.search.split('=')[1])
    let data = db.getOne('account', id)

    // 回显数据
    qs('form input[name=id]').value = data.id
    qs('form input[name=account]').value = data.account
    qs('form input[name=pwd]').value = data.pwd
    qs('form input[name=nickName]').value = data.nickName
    qs('form input[name=balance]').value = data.balance
    qs('form textarea[name=sign]').value = data.sign
}