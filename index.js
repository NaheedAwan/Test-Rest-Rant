// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT

// setting React Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// middleWare
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.static('public'))

// importing controllers
app.use('/places', require('./controllers/places'))
app.use(express.json() )

// routes
// home
app.get('/', (req, res)=>{
    res.render("Home")
})
// index
app.get('/', (req, res)=>{
    res.render('places/Index')
})
// wild card
app.get('*', (req, res) => {
    res.render('error404')
  })
  
  // PORT
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
  })
 