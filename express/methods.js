const express = require('express')
const path = require('path')
const app = express()
const {people}=require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true, data: people})
})

// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve((__dirname,'./express/methods-public/index.html')))
// })

// app.get('/normalize.css',(req,res)=>{
//     res.status(200).sendFile(path.resolve((__dirname,'./express/methods-public/normalize.css')))
// })

// app.get('/styles.css',(req,res)=>{
//     res.status(200).sendFile(path.resolve((__dirname,'./express/methods-public/styles.css')))
// })

app.post('/api/people',(req,res)=>{
    console.log(req.body)
    const {name}=req.body
    if(!name){
        res.status(400).json({success: false,msg: 'Please provide a name'})
    }
    res.status(200).json({success: true,person: name})
 })

 app.post('/api/postman/people',(req,res)=>{
    console.log(req.body)
    const {name}=req.body
    if(!name){
        res.status(400).json({success: false,msg: 'Please Provide a name'})
    }
    res.status(200).json({success: true,person: name})
 })

 app.post('/login',(req,res)=>{
    const {name}=req.body
    if(name){
        res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
 })

app.put('/api/people/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body

    const person = people.find((person)=> people.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success: false,msg: `No Person with Id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        res.status(200).json({success: true, data:newPeople})
    })
})

app.delete('/api/people/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body

    const person = people.find((person)=> people.id === Number(req.params.id))
    if(!person){
        return res.status(404).json({success: false,msg: `No Person with Id ${id}`})
    }
    const newPeople = people.filter((person)=>person.id !== Number(id))
        res.status(200).json({success: true, data:newPeople})
})

 app.listen(5000,()=>{
    console.log('Server Listening to Port 5000....')
 })