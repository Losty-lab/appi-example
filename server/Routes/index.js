const userFake=require('../usersFake')

module.exports=(app)=>{

    app.get("/api",(req,res)=>{
        console.log('INSIDE REQ')

        //const userSend=JSON.stringify(userFake)
       // res.send("Hollllaaaa")
        res.json(userFake)
    })
}