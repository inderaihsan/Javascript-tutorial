const express = require('express')  
const duelist = require('./models/hero_owner') 
app = express()
const expressLayouts = require('express-ejs-layouts') 

app.use(expressLayouts);



app.set('view engine', 'ejs') 

app.get('/', (req,res)=>{ 
     const char_name = duelist.duelist.name 
     const hero_owned = duelist.duelist.owned_hero 
     const title = 'welcome!' 
     layout = 
     res.render('index', {char_name, hero_owned, title, layout: 'layout/main layout'})
}) 


app.get('/about', (req,res)=>{
     const title = 'about'
     res.render('about', {title, layout: 'layout/main layout'})
}) 


app.use('/', (req,res)=>{ 
     const char_name = duelist.duelist.name 
     const hero_owned = duelist.duelist.owned_hero 
     res.render('index', {char_name, hero_owned, title, 
     layout: 'layout/main layout'})
     
}) 


app.listen(3000, ()=>{
     console.log('app is listening on port 3000')
 }) 

 