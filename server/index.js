const express=require('express');
const route=require('./Routes/index')

const app=express()

route(app)

app.listen(3020)