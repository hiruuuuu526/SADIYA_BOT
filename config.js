const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Li5FGaxQ#1s03KVaQj_ODxcmPWx6ViQ1ZM2hmUXTqZPrg5wav2JU",
MONGODB: process.env.MONGODB || "mongodb://mongo:mtUDdIrcoGYMkUdTVGFxouhNcxxSEkiv@autorack.proxy.rlwy.net:36900"
};


