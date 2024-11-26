const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PvR0EBIQ#PIjBt7lTZkUkbHI3g7IM4t2iBomLISopXqfEsP8aCPk",
MONGODB: process.env.MONGODB || "mongodb://mongo:kxiwsnJulgvyrBCSUritiDjlpJLLPDYf@junction.proxy.rlwy.net:45045"
};


