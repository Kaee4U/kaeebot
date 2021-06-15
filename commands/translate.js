const translate = require('@iamtraction/google-translate');
const {client, message, messageembed} = require("discord.js");

module.exports = {
    name: "translate",
    run: async (client, message, args) => {
        const query = args.join(" ");
        if(!query) return message.reply('Masukkan yang mau ditranslate');

        const translated = await translate(query, { to: 'en'});
        message.channel.send(translated.text);
    }
}