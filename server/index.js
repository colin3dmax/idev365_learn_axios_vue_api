const express = require('express');
const app = express();
const port = 3000;

//服务端要支持json格式的post解析
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/login', (req, res) => {
    console.log('/api/login-->获取浏览器发来的json参数：',req.body)
    const result = {
        code: 0,
        message: "ok",
        data: {
            name: req.body.userName,
            password: req.body.password,
        }
    }
    res.send( result );
});

app.get('/api/userInfo', (req, res) => {
    const result = {
        code: 0,
        message: "ok",
        data: {
            name: "张三",
            age: 20,
        }
    }
    res.send( result );
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));