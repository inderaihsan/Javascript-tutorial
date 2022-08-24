const fs = require('fs') 

const folderdataexist = fs.existsSync('./data') 

const check_dat = () =>{
    if (!folderdataexist){ 
        fs.mkdir('data',(err)=>{
            if(err) throw err
        })
    } 
    fs.writeFileSync('data/hero_owner.json', '[]','utf8')   
    fs.writeFileSync('data/hero.json', '[]','utf8')
}  

check_dat()


class hero{
    name = '' 
    type = '' 
    skill = '' 
    price = '' 
    constructor(name , type, skill, price){
        this.name = name 
        this.type = type 
        this.skill = skill 
        this.price = price
    }
} 


class owner{
    name = '' 
    type = '' 
    zeni = '' 
    owned_hero = [] 

    constructor(name, type, zeni){
        this.name = name 
        this.type = type 
        this.zeni = zeni
    } 



    ownhero(name, type, skill, price){
        const build = new hero(name, type, skill,price) 
        console.log(build)
        const obj = {
            name : name , 
            type : type, 
            skill : skill, 
            price : price, 
        }  
        this.owned_hero.push(build) 
        this.zeni = this.zeni - price

        const fetch = fs.readFileSync('data/hero.json','utf8') 
        const jsoned = JSON.parse(fetch) 
        jsoned.push(obj) 
        fs.writeFileSync('data/hero.json',JSON.stringify(jsoned),'utf8')
        
    }
} 


duelist = new owner('arlene', 'agile', 9500)   
duelist.ownhero('alucard', 'fighter', 'demon hunter sword',2000)



 module.exports = {
     duelist
}