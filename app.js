const express = require('express')
const app = express()
const path = require('path')
const products = require('./testapi')
app.use(express.static('./public'))


app.get('/', (req, res)=>{
    // res.status(200).send('This is the homepage')
    // res.sendFile(path.resolve(__dirname, './index.html'))
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product) =>{
        const {id, name, description} = product
        return {id, name}
    })
    res.json(newProducts)
})
// app.get('/api/products', (req, res)=>{
//     const newProducts = products.map((product)=>{
//         const {id, name, description} = product;
//         return {id, name}
//     })
//     res.json(newProducts)
// }
// )

app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})
app.listen('5000', ()=>{
    console.log('app is listening on port 5000')
})


