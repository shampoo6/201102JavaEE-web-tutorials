qs('.back').addEventListener('click', (e) => {
    stopDefaultEvent(e)
    back()
})

qs('.submit').addEventListener('click', (e) => {
    stopDefaultEvent(e)
    // 获取并验证参数
    let account = qs('form input[name=account]').value
    let pwd = qs('form input[name=pwd]').value
    let nickName = qs('form input[name=nickName]').value
    let balance = qs('form input[name=balance]').value
    let sign = qs('form textarea[name=sign]').value
    let data = {
        account: account,
        pwd: pwd,
        nickName: nickName,
        balance: balance,
        sign: sign
    }
    console.log(data)
    db.insert('account', data)
    location.href = './index.html'
})