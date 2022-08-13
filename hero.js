var hero = {
    'name' : ['alucard' , 'zilong'], 
    'best item' : ['haas claw' , 'windtalker'], 
    'farming technique' : ['brute force', 'back propagation'],
    'price' : [2000, 1500], 
    'attack_power' : [300, 250],
    'health_point' : [9000, 9000],
    
    'add_price' : function (obj , num, heroname){ 
        let price_index = this.name.indexOf(heroname) 
        if (price_index != -1){
            this.price[price_index] = this.price[price_index] + num
        }
        else { 
            console.log('hero not found.')
        }
    }, 

    'add_new_hero' : function(nam, bestit, farmtech, price, atp, hp){
        this.name.push(nam) 
        this["best item"].push(bestit) 
        this["farming technique"].push(farmtech) 
        this.price.push(price) 
        this.attack_power.push(atp) 
        this.health_point.push(hp)
    }, 

    'attack' : function(attacker, target) { 
        console.log('=================attack begin!=====================')
        console.log(' ')
        attacker_index = this.name.indexOf(attacker) 
        target_index = this.name.indexOf(target) 
        attack_power = Math.random() * this.attack_power[attacker_index] 
        current_hp = this.health_point[target_index] - attack_power 
        this.health_point[target_index] = current_hp 
        console.log('attacker : ', attacker) 
        console.log('target :', target)
        console.log('attack point :', attack_power) 
        console.log('targets hp :', this.health_point[target_index])
        console.log(' ')
        console.log('=================attack done!=====================')
    }
} 





const timed_attack = (attacker , target, n) => {
    let time = 0
    while (time <= n){  
     hero.attack(attacker, target)
     time = time+1
    }
} 

const fatal_death = (attacker, target) =>{
    target_index = hero.name.indexOf(target) 
    while (hero.health_point[target_index] > 0){
        hero.attack(attacker, target)
    }
}

attack = hero.attack
added = hero.add_new_hero

module.exports = {hero, attack, added, timed_attack, fatal_death}  



