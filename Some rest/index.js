var express = require("express")  
const {hero} = require('./hero')
app = express() 


app.get("/url", (req,res,next)=> {
    let n = 20
    let i =0 
    while(i<=n){
        hero.attack('alucard', 'zilong') 
        i=i+1
        
    }


    res.json(hero)
})


app.listen(3000, ()=> {
    console.log('hi your webapp is running :)')
}) 

