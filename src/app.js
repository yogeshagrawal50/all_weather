const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//Define path for express confid
const publicpath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,"../templates/views")
const partialpath = path.join(__dirname,'../templates/partials')

//setup handlerbars engine and views location
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)

//Setup static directory to serve
app.use(express.static(publicpath))

app.get('/about',(req,res)=>{
  res.render('about',{
    title:'All Weather',
    name:'Yogesh'
  })
})

app.get('/help',(req,res)=>{
  res.render('help',{
    title:'All Weather',
    name:'Yogesh'
  })
})

app.get('', (req, res) => {
  res.render('index',{
    title:'All Weather',
    name:'Yogesh'
  })
})

app.get('/weather',(req, res)=>{
  if (!req.query.address){
    return res.send({
      error: "you must search something"      
    })
  }
  add = req.query.address
  geocode(add, (error, {lat, lon, loc} = {}) =>{
    if (error){
      return res.send({ error })}  
    forecast(lat,lon, (error, forecastData) =>{
      if (error){
        return console.log("error", error)
     }  
     res.send({
      forecast: forecastData,
      location : loc
    })
    })
  })
  
})
app.get('/products',(req,res) =>{
  if (!req.query.search){
    return res.send({
      error: "you must search something"      
    })
  }  
  res.send({
    products: []
  })
})

app.get('*', (req,res)=>{
  res.render('404',{
    title:'weather app',
    name:'Yogesh',
    errs:'Not found'
  })
})

app.listen(3000, () =>{
  console.log('Server is up on browser')
})