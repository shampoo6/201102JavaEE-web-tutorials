const express = require('express')
const path = require('path')
const app = express()
const port = 1024

app.use('/', express.static(path.join(__dirname, './public')))

app.get('/sayHello', (req, res) => {
    res.json({
        message: 'hello'
    })
})

app.listen(port, () => {
    console.log('server start on: http://127.0.0.1:1024')
})