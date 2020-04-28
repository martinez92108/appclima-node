const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=07b8224535b2fa26a327936102fedf31&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}