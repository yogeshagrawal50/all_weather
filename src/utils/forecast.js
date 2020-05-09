const request = require('request')

const forecast = (lat, lon, callback) =>{
  const url = 'https://api.weatherbit.io/v2.0/current?lat='+lat+'&lon='+lon+'&key=5487f404bd0443ab80778971c4df5ddd'
  request({url: url, json: true}, (error, {body}) =>{
    if (error){
      callbacl("Unable to fetch details")
    } else if (body.error){
      callback("Unable to find location")
    }else {
      let forecastData = ["The overall weather seems like"+body.data[0].weather.description,"The overall weather seems like"+body.data[0].weather.description,
      "The current temperature is "+ body.data[0].temp + ' °C' ,"Current AQI is " + body.data[0].aqi,"Currently precipitation is "+body.data[0].precip +" mm/hr"
    ]

    callback(undefined,forecastData)
    }
  } )
}
 



module.exports = forecast