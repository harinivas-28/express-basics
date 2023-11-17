const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger-export')
const authorize = require('./authorize-export')

app.use(morgan('tiny'))
// app.use([logger,authorize])
//app.use(express.static('./public'))
app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/api/products',(req,res)=>{
    res.send('Products')
})

app.get('/api/items',(req,res)=>{
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server Listening to port 5000...')
})