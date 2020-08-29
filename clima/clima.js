const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=766081278752d14391fbf6f6758afc66&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}