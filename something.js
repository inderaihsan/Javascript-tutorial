const {hero, attack, added, timed_attack, fatal_death} = require('./hero')  
const _ = require('underscore') 

hero.add_new_hero('balmond', 'Berserkers fury', 'forward propagation', 2500, 500, 5000)  


zipped_name_atp = _.zip(hero.name, hero.attack_power) 



fatal_death('alucard', 'zilong')