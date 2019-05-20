const axios = require('axios-https-proxy-fix');

const getClima = async( lat,lng ) => {

    const instance = axios.create({
        proxy: {
            host: '216.46.96.67',
            port: 18717
        },
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ca3f92c7540a40f904fda8669db2a96a&units=metric`
    });

    const resp = await instance.get();

    return resp.data.main.temp;
}

module.exports = {
    getClima
}