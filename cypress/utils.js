const fetch = require('node-fetch');

const CHAT_ID = Cypress.env('CHAT_ID'); //'137142832';
const BOT_TOKEN = Cypress.env('BOT_TOKEN');
const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

if (!CHAT_ID || !BOT_TOKEN) {
    throw new Error('Token or chat ID is missing: ' + CHAT_ID + ' ' +BOT_TOKEN )
}

const sendUpdate = data => {
    data.chat_id = CHAT_ID;
    fetch(URL, {method: 'POST', headers: {
        'Content-Type': 'application/json'
      },body: JSON.stringify(data)}).then(res => res.json()).then(res => {
        console.log(res);
    })
}

module.exports = {
    sendUpdate: sendUpdate
}