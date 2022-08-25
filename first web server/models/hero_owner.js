const fs = require('fs') 

const folderdataexist = fs.existsSync('./data') 

const check_dat = () =>{
    if (!folderdataexist){ 
        fs.mkdir('./data',(err)=>{
            if(err) throw err
        })
    }     
    if (! fs.existsSync('./data/hero.json')){
        fs.writeFileSync('./data/hero.json', '[]','utf8')}
}   

fs.writeFileSync('./data/hero.json', '[]','utf8')

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
        const fetched = fs.readFileSync('./data/hero.json', 'utf8') 
        let jsoned = JSON.parse(fetched)  
        let there=false 
        let items =0
        for (let items in jsoned) {
            if (name == jsoned[items].name){
                there=true 
                console.log('hero already written in json') 
                items =items++
            }
        } 
        if (!there){
            jsoned.push(build) 
            this.owned_hero.push(build) 
            this.zeni = this.zeni - price }
        fs.writeFileSync('./data/hero.json', JSON.stringify(jsoned), 'utf8') 
    }
} 

const load_hero = () =>{
    const fetched_file = fs.readFileSync('./data/hero.json', 'utf8') 
    const allhero = JSON.parse(fetched_file) 
    return allhero
} 

const find_hero = (name)=>{
    all_hero = JSON.parse(fs.readFileSync('./data/hero.json', 'utf8')) 
    let nam = 0
    for (nam in all_hero){
        if (name == all_hero[nam].name){
            console.log(all_hero[nam]) 
            console.log('found!', nam) 
            return all_hero[nam] 

            
        } 
        nam = nam+1
        
    }
   

} 

duelist = new owner('arlene', 'agile', 9500)   
duelist.ownhero('link', 'necromancer', 'lifesteal',2000) 
duelist.ownhero('hyun', 'assassin', 'stealth',2000)  





console.log(find_hero('hyun')) 




 module.exports = {
     duelist, 
     load_hero, 
     find_hero
} 

