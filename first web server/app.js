const express = require('express')  
const herofunc = require('./models/hero_owner') 
app = express()
const expressLayouts = require('express-ejs-layouts') 

app.use(expressLayouts);



app.set('view engine', 'ejs') 

app.get('/', (req,res)=>{ 
     const char_name = herofunc.duelist.name  
     const char_zeni = herofunc.duelist.zeni
     const hero_owned = herofunc.load_hero()   
     const title = 'welcome!' 
     res.render('index', {char_name, hero_owned, char_zeni, title, layout: 'layout/main layout'})
}) 


app.get('/about', (req,res)=>{
     const title = 'about'
     res.render('about', {title, layout: 'layout/main layout'})
}) 


app.use('/', (req,res)=>{ 
     const char_name = herofunc.duelist.name  
     const char_zeni = herofunc.duelist.zeni
     const hero_owned = herofunc.load_hero()  
     const title = 'welcome!' 
     res.render('index', {char_name, hero_owned, char_zeni, title, layout: 'layout/main layout'})
     
}) 


app.listen(3000, ()=>{
     console.log('app is listening on port 3000')
 }) 

 