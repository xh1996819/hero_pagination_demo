// 1.0 导入 express 模块
const express = require('express')

// 2.0 使用 express 生成服务器对象
const app = express()

//静态托管
app.use(express.static('./views'))
app.use('/node_modules', express.static('./node_modules'))

app.use(require('./server/router'))

// 4.0 启动服务器，设置端口等信息
app.listen(4600, () => {
    console.log("server running at http://127.0.0.1:4600")
})