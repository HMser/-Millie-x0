// Requirements

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// // Our Custom Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}





global.owner = ['918113921898'] // Put your number here
global.mods = ['918113921898'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium users do not need a limit
global.APIs = { // API Prefix
  // name: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  l0lhuman: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://fxc7-api.herokuapp.com':'pnj8NAJb',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'FuzBot1',
  'https://api.lolhuman.xyz': 'sdz8VotwEnDd4HvdIUfy1e4qTDx',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
global.packname = '💋ᴍɪʟʟɪᴇ💋'
global.author = 'Ⓝ︎🅔︎Ⓔ︎🅡︎Ⓐ︎🅙︎'


global.wait = '_*Please Wait..*_'
global.eror = '_*Server Error*_'
global.fla = 'https://i.imgur.com/VPZaMXT.jpeg'

global.watermark = '© ᴍɪʟʟɪᴇ'

global.multiplier = 69 // The higher it is, the harder it is to level up

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


//Asena dependencies
DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v1.3.2 Global Stable',
    CHANNEL: 'https://t.me/remasterplugin',
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? 'false' : process.env.BLOCK_CHAT,
    NOLOG: process.env.NO_LOG === undefined ? 'true' : process.env.NO_LOG,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    SLINK: process.env.SOCIAL_MEDIA === undefined ? 'https://www.instagram.com/neer_j_/' : process.env.SOCIAL_MEDIA,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO === undefined ? '918113921898,0' : process.env.SUDO,
    DEBUG: DEBUG,
    
};
