//链接路由并操纵数据
// 1.0 导入 express 模块
const express = require('express')
const mySql = require('mysql');
const router = express.Router();


const conn = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodejs',
    //开启执行多条语句查询的功能
    multipleStatements: true
})

//监听首页的渲染请求
router.get('/getAll', (req, res) => {
    let body = req.query
    console.log(body.currentPage);

    let sql = 'SELECT * FROM callerskill LIMIT ?, 1;\
    SELECT COUNT(*) AS count FROM callerskill';


    conn.query(sql, Number(body.currentPage - 1), (err, result) => {
        if (err) return res.send({ status: 500, msg: '数据连接失败' + sql })
        let totalPage = (result[1][0].count / body.pageSize)
        res.send({ status: 200, data: result[0], totalPage })
    })

})
module.exports = router;