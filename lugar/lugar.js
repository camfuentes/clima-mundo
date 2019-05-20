const axios = require('axios-https-proxy-fix');

const getLugarLatLng = async( dir ) => {
    const encodedUrl = encodeURI(dir);
    // console.log(encodedUrl);
    
    const instance = axios.create({
        proxy: {
            host: '216.46.96.67',
            port: 18717
        },
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'X-RapidAPI-Key': 'a16809d296msh46fb6dda4435ccfp1bf589jsn59809a760793'
        }
    });

    const resp = await instance.get();

    if ( resp.data.Results.lenght === 0){
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    

    return{
        direccion,
        lat,
        lng
    }
    
}

module.exports = {
    getLugarLatLng
}