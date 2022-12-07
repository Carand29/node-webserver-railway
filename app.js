const express = require('express');
const hbs = require('hbs');
const app = express();
require('dotenv').config();
const port = process.env.PORT;



//
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico

app.use(express.static('public'))

app.get('/', (req, res )=> {
    res.render('home',{
        nombre:'Carlos Peñuela'
    });
} )

// app.get('/generic', (req, res )=> {
//     res.sendFile(__dirname + '/public/generic.html')
// } )

app.get('/generic', (req, res)=>{
    res.render('generic')
})

app.get('/elements', (req, res)=>{
    res.render('elements')
})
// dirname me redirecciona a la ruta indicada

app.get('/elements', (req, res )=> {
    res.sendFile(__dirname + '/public/elements.html')
} )


app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/hola-mundo', function (req, res) {
    res.send('esta es la respectiva seccion de la primera ruta')
  })
app.listen(4000)