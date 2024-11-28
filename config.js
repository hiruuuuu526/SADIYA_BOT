const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fi4HFI6T#ueB845SD9Z2IQTX-6xbOq-do_2w-_Y0_VtWHm55COBY",
MONGODB: process.env.MONGODB || "mongodb://mongo:mtUDdIrcoGYMkUdTVGFxouhNcxxSEkiv@autorack.proxy.rlwy.net:36900"
};


