const fs = require('fs') 

const folderdataexist = fs.existsSync('./data') 

const check_dat = () =>{
    if (!folderdataexist){ 
        fs.mkdir('data',(err)=>{
            if(err) throw err
        })
    }     
    if (! fs.existsSync('./data/hero.json')){
        fs.writeFileSync('./data/hero.json', '[]','utf8')}
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
        const fetched = fs.readFileSync('./data/hero.json', 'utf8') 
        const jsoned = JSON.parse(fetched) 
        jsoned.push(build) 
        fs.writeFileSync('./data/hero.json', JSON.stringify(jsoned), 'utf8')
        
        
    }
} 

const load_hero = () =>{
    const fetched_file = fs.readFileSync('./data/hero.json', 'utf8') 
    const allhero = JSON.parse(fetched_file) 
    return allhero
}

duelist = new owner('arlene', 'agile', 9500)   
duelist.ownhero('link', 'necromancer', 'lifesteal',2000) 
//duelist.ownhero('hyun', 'assassin', 'stealth',2000) 

console.log(load_hero)


 module.exports = {
     duelist, 
     load_hero 
} 

