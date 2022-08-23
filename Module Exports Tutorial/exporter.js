const out = (x) => {
    console.log('this function was fetched ',x)
} 

class human{
    name =''
    age = 0

    constructor(name , age){
        this.name = name 
        this.age = age
    }

    show_human(){
        console.log('hai nama saya ', this.name, 'saya ', this.age, ' tahun')
    } 
}

const sin_30 = 1 


class hero{ 
    name  = ''
    age = 0
    stat = '' 
    atp = 0 
    potential = 0
    hp = 1500 
    
    constructor(name, age, stat){
        this.name = name 
        this.age=age
        this.stat = stat
    } 

    add_atp(atp){
        this.atp = this.atp+atp
    }

    get_attacked(power) { 
        this.hp = this.hp - power
    }

    
    show_stat(){
        if(this.hp>0){
            this.stat = 'alive' 
            console.log(this.name, this.age, this.stat)
        }

        else{
            this.stat = 'dead' 
            console.log(this.name, this.age, this.stat)
        }
    }

} 

const fs = require('fs') 

module.exports = {
    sin_30 :sin_30 , 
    human : human ,
    out :out, 
    hero : hero, 
    fs : fs
} 

