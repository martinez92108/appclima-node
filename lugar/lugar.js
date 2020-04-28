const axios = require('axios');

const getLugarLatLog = async(dir) => {
    const encodedUrl = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '74a9bc6e92mshf49e2d8cca1a7dep188eddjsna6a9a51c1bb3' }
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.lengt === 0) {
        throw new Error(`no hay resultados para ${dir}`);
    }
    const da = respuesta.data.Results[0]
    const direccion = da.name;
    const lat = da.lat;
    const lng = da.lon;
    return {
        direccion,
        lat,
        lng
    }


}
module.exports = {
    getLugarLatLog
}