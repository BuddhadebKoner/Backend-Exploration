require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About Us')
})
app.get('/contact', (req, res) => {
    res.send('Contact Us')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
