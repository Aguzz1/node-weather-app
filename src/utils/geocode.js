const request = require('request');

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=76f702166dc5d2da9ea64cddd06cc35e&query=' + encodeURIComponent(address) + '&limit=1'

    request({ url, json : true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.data.length === 0  || body.data.success === false) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                location: body.data[0].label,
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude
            })
        }
    }) 
}



module.exports = geocode