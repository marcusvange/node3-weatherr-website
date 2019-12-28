const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/dbbeeb52dfa90bb2b938f285372b11c8/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search', undefined)
        }  else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain and a windspeed of ' + body.currently.windSpeed + ' meters per second.')
        }
    })
}

module.exports = forecast