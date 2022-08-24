const fs = require('fs') 
const { stderr } = require('process')
const readline = require('readline') 
const { result } = require('underscore')

const rl = readline.createInterface({
    input :process.stdin, 
    output : process.stdout
}) 

const fold = './data'
if (!fs.existsSync(fold)){
    fs.mkdirSync(fold) 
}  


const herofile = './data/programmer.json' 
if(!fs.existsSync(herofile)){
    fs.writeFileSync(herofile, '[]', encoding = 'utf8')
} 

//callback functions
// rl.question('hallo, please enter your name : ',(name)=>{
//     rl.question('hi!, hope you are having a good day,  what is your favourite programming language?', (ans)=>{ 
//         rl.question('can you at least write a line of code from your favourite programming language?', (code)=>{
//             const fetched = {name , ans, code} 
//             const all_file = fs.readFileSync('./data/typeofheroes.json', 'utf8') 
//             const jsoned = JSON.parse(all_file) 
//             jsoned.push(fetched) 
//             fs.writeFileSync(herofile, JSON.stringify(jsoned))
//             rl.close()

//         })
        
//     })
// }) 

//promise functions 

const questions = (pertanyaan) =>{
    return new Promise((resolve,reject)=>{
        rl.question(pertanyaan, (name) =>{
            resolve(name)
        })
    })
} 

const save_questions = (name , fav_prog) =>{
    const fetch_all = {name , fav_prog} 
    existed_file = fs.readFileSync('./data/programmer.json', 'utf8') 
    jsoned = JSON.parse(existed_file) 
    jsoned.push(fetch_all) 
    fs.writeFileSync('./data/programmer.json', JSON.stringify(jsoned)) 
    console.log('thank you for filling the question :)')
    rl.close()
} 

module.exports = {
    questions, 
    save_questions
}