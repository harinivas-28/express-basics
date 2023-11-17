const express = require('express')
const path = require('path')
//const {readFileSync}=require('fs')
const app = express()

// const homePage = readFileSync('./public/dom-projects.html')
// const homeStyles = readFileSync('./public/dom-projects.css')
// const homeScript = readFileSync('./public/dom-projects.js')

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    console.log('User Hit The Server')
    res.status(200).sendFile(path.resolve(__dirname,'./public/dom-projects.html'))
})

app.get('/dom-projects.css',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./public/dom-projects.css'))
})
app.get('/dom-projects.js',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./public/dom-projects.js'))
})

app.all('*',(req,res)=>{
    res.status(404).send('Page Not Found')
})

app.listen(4000,()=>{
    console.log('Server Listening to port 4000....')
})