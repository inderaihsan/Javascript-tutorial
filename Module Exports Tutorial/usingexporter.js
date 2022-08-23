const { fs } = require('./exporter')
const satu = require('./exporter') 

heri = new satu.hero('heri', 20)

satu.hero.show_stat 

//satu.fs.writeFileSync('generated_file.txt', 'this file is generated from another file synchronously :)') 

//satu.fs.writeFile('async_generated_file.txt', 'this file is generated asynchronously from another file :)', (err) =>{
//    if(err)throw err 
//    console.log('file saved asynchronously')
//}) 

//console.log(fs.readFileSync('generated_file.txt').toString()) 

//fs.readFile('async_generated_file.txt', (err,data)=>{

//    if(err)throw err 
//    console.log(data.toString())

//})

const rl = require('readline') 
const rlt = rl.createInterface({
    input : process.stdin, 
    output : process.stdout
})


console.log('write your hero stats!')




rlt.question('hero name?', (name)=>{  
    rlt.question('your hero name is ' + name + ' how old is your hero?',(age)=>{
        rlt.question(('okay, great. his name is ', name, ' the age is ', age, 'what about his stats?'), (stats)=> {

            const fetched_hero = { name, age, stats} 
            const file = fs.readFileSync('somejsonofhero.json', encoding = 'utf8') 
            const JSONFILE = JSON.parse(file) 
            JSONFILE.push(fetched_hero)  
            fs.writeFileSync('somejsonofhero.json', JSON.stringify(JSONFILE)) 

            rlt.close()
            
        } )
    })
})   


var created_hero = []
const inputted_hero = JSON.parse(fs.readFileSync('somejsonofhero.json', encoding = 'utf8')) 
console.log(inputted_hero)
let index_ =0 
for (index_ in inputted_hero) { 
    new_hero = new satu.hero(inputted_hero[index_].name, inputted_hero[index_].age, inputted_hero[index_].stat)
    created_hero.push(new_hero) 
    index_ = index_+1
} 








