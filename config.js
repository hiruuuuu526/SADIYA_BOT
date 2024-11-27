const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Dz4j1R7b#Ty8z006Bk8rt0ikQ4iNErL9R9Zr8Ea0gvy-i8MdYzq0",
MONGODB: process.env.MONGODB || "mongodb://mongo:mtUDdIrcoGYMkUdTVGFxouhNcxxSEkiv@autorack.proxy.rlwy.net:36900"
};


