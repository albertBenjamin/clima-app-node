const axios = require('axios');

const getlugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '7fd70da0d0msha5fcfe01b2210d1p1266fejsnf0321f8b17e0' }
    })

    const resp = await instance.get();
    if (resp.data.Results === null) {
        //throw new Error(`No hay resultados para ${dir}`);
        console.log(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getlugarLatLng
}