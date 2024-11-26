const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "owener",

    desc: "To get the bot informations.",

    react: "💗",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*💗Contact Bot Owner1:* https://wa.me/94726840185

*💗ꜱᴀᴅɪʏᴀ ʙᴏᴛ ᴄʀᴇᴀᴛᴇ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ💗*`

return await conn.sendMessage(from,{image: {url:`ᴇɴᴛᴇʀ ᴜʀʟ`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
