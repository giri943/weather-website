const request = require ('request')
const forecast = ( latitude, longitude,callback) => {
   
 const url = 'http://api.weatherstack.com/current?access_key=2f806d901094a9a641535ebc63f5d680&query='+latitude+','+longitude
 request({url, json: true}, (error, {body}) => {
     if (error){

        callback('Unable to connect ', undefined)

     }else if (body.error){

        callback('Unable to find the location',undefined)
        console.log(body.error)

     } else {

        callback(undefined,body.current.weather_descriptions[0] +'.Its is currently ' + body.current.temperature +' degrees out. There is ' + body.current.precip +'% chance of rain.')
         
     }
})
}

module.exports=forecast