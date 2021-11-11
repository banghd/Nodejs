const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const withdraw = require('./withdraw')

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.post('/withdraw', (req, res) => {

    const args = req.body
    return res.json(withdraw(args))
})


app.listen(3000, () => {
    console.log('Server inited');
})