const { fs } = require('./satu')
const satu = require('./satu') 

heri = new satu.hero('heri', 20)

satu.hero.show_stat 

satu.fs.writeFileSync('generated_file.txt', 'this file is generated from another file synchronously :)') 

satu.fs.writeFile('async_generated_file.txt', 'this file is generated asynchronously from another file :)', (err) =>{
    if(err)throw err 
    console.log('file saved asynchronously')
}) 

console.log(fs.readFileSync('generated_file.txt').toString()) 

fs.readFile('async_generated_file.txt', (err,data)=>{

    if(err)throw err 
    console.log(data.toString())

})

const rl = require('readline') 
const rlt = rl.createInterface({
    input : process.stdin, 
    output : process.stdout
})

rlt.question('if you can change the world, what will you do?', (answer)=>{ 
    console.log('your answer : ', answer)
    fs.writeFileSync('generated_file.txt', answer)
    rlt.close()
}) 

fs.readFile('generated_file.txt', (err, data)=>{
    if (err) throw err 
    console.log(data.toString())
})

