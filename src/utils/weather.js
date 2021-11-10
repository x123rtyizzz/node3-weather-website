const request = require('postman-request')

const weather = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6605263829d6fb30f0d0c607e22de57f&query=' + lat + ',' + lon + '&units=m'

    request({ url, json: true}, (error, { body} = {}) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        }else if (body.error) {
            callback("Unable to find locations", undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] +". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = weather