const userFake=require('../usersFake')

module.exports=(app)=>{

    app.get("/",(req,res)=>{
        console.log('INSIDE REQ')

        //const userSend=JSON.stringify(userFake)
       // res.send("Hollllaaaa")
        res.json(userFake)
    })
}