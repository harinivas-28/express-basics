const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log('User Hit the Server')
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.get('*',(req,res)=>{
    res.status(404).send('Page Not Found')
})

app.listen(5500,()=>{
    console.log('Server Listening to Port 5500....')
})





// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen