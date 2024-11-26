const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "enter your session id",
MONGODB: process.env.MONGODB || "mongodb+srv://sadishahirushan0:Sadiya102@cluster0.tuu51.mongodb.net/"
};


