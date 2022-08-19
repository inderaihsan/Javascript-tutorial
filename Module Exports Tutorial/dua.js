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
    rlt.question('your answer is ' + answer + ' is there any other wish?',(other)=>{
        const obj = {
            'first_ans' : answer, 
            'second_ans' : other
        }  
        somehuman = new satu.human('arlan', 22)
        console.log(somehuman.name + ' saw your answer :p') 
        obj.watcher = somehuman.name
        fs.writeFileSync('somejsonofanswer.json', JSON.stringify(obj)) 
        rlt.close()
    
    })
})  


