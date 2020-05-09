const request = require('request')

const forecast = (lat, lon, callback) =>{
  const url = 'https://api.weatherbit.io/v2.0/current?lat='+lat+'&lon='+lon+'&key=5487f404bd0443ab80778971c4df5ddd'
  request({url: url, json: true}, (error, {body}) =>{
    if (error){
      callbacl("Unable to fetch details")
    } else if (body.error){
      callback("Unable to find location")
    }else {
      callback(undefined,"I is cureently "+ body.data[0].temp )
    }
  } )
}
 



module.exports = forecast