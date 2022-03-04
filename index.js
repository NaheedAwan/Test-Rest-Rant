require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
// setting React Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
// static Routes
app.use(express.static('public'))
// importing controllers
app.use('/places', require('./controllers/places'))
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
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
  })
 