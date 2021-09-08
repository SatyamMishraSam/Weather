const express = require('express');
const app = express(); 
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000 ;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views"); //we need to give path for new views directory
const partials_path = path.join(__dirname,"../templates/partials");//we need to give path for new partials directory


app.set('view engine','hbs');

app.set('views', template_path); //views in under templates so we need to set

hbs.registerPartials(partials_path); //we r using partials so we need to register it.

app.use(express.static(static_path));



app.get('/' , (req,res)=>{
    // res.send("helyo boiss");
    res.render('index');
})


app.get('/about' , (req ,res)=>{
    // res.send('welcome to about section of our weather app')
    res.render('about');
})

app.get('/weather', (req,res)=>{
    // res.send("weather is!!!")
    res.render('weather');
})

app.get('*' , (req,res)=>{
    // res.send("oooops invalid move boiss !!!")
    res.render('404err');
})

app.listen(port,()=>{
    console.log(`connected at port ${port} !!!!`);
})