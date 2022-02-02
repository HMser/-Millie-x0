let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/neera-j/Wizard-Ser/4e400c8ca540fc9564b987326f91535f65253217/src/IMG-20220126-WA0002.jpg")).buffer(), devil, 'ᴍɪʟʟɪᴇ ʙʏ ɴᴇᴇʀᴀᴊ \n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://github.com/neera-j \n\n\ © ɴᴇᴇʀᴀᴊ' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
