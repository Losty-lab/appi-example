const express=require('express');
const route=require('./Routes/index')
const path=require('path')

const app=express()

route(app)

app.use(express.static(path.resolve(__dirname,"build")))

app.listen(3020)