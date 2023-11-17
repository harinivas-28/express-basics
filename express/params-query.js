const express = require('express')
const app = express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,price}= product
        return ({id,name,price})
    })
    res.json(newProducts)
})

app.get('/api/products/:productId',(req,res)=>{
    const {productId} = req.params
    // console.log(req)
    // console.log(req.params)
    const singleProduct = products.find(
        (product)=> product.id === Number(productId)
    )
    if(!singleProduct){
        return res.status(404).send('Product does not Exist')
    }

    return res.json(singleProduct)
})

app.get('/api/v1/query',(req,res)=>{
    // console.log(res.query)
    const {search,limit} = req.query
    const sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        res.status(200).send('no products matching your search')
    }
    res.status(200).send(sortedProducts)
})

app.listen(5000,()=>{
    console.log('Server Listening to Port 5000....')
})