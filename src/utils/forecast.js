const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url= 'http://api.weatherstack.com/current?access_key=ecde643c43d58605c496ef275053d388&query=' + latitude + ',' +longitude + '&units=m'
    console.log(url);

    request({ url, json : true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error){
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `It is ${body.current.weather_descriptions}, Temperature is ${body.current.temperature}°C and it feels like ${body.current.feelslike}°C, humidity is ${body.current.humidity}% and precipitation chance is ${body.current.precip}%.
            The wind speed is ${body.current.wind_speed}, blowing at ${body.current.wind_degree} degrees.
              ${body.location.localtime}`)
        } 
    })
}


module.exports = forecast