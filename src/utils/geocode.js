const request = require('request')

const geocode = (address, callback) => {
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoieW9nZXNoYWdyYXdhbDE1MCIsImEiOiJjazl0b3lweWUwY21uM2VuZDd4eWw3aTB0In0.CTm02hBtQ5mOPu3HDpIdTw&limit=1"
  request({ url, json: true}, (error, {body}) =>{
    if(error){
      callback('Unable to fetch details')
    }else if (body.features.length == 0){
      callback('Unable to find location')
    } else {
      callback(undefined, {
        lat : body.features[0].center[1],
        lon : body.features[0].center[0],
        loc : body.features[0].place_name
      })
    }
  })
}

module.exports = geocode