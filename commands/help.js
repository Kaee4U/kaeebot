const {MessageEmbed} = require('discord.js');

module.exports = {
    name:'help',
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setColor('#ee3b3b')
        .setTitle ('INFO COMMAND')
        .setDescription ('ADA BEBERAPA COMMAND YANG BISA DIGUNAKAN')
        .addFields(
            {name:'Command 1', value:'*hai'},
            {name:'Command 2', value:'*itusiapa'},
            {name:'Command 3', value:'*paptt'},
            {name:'Command 4', value:'*ping'},
            {name:'Command 5', value:'*translate'},
            {name:'Command 6', value:'*ban'}
        )
        .setImage('https://cdn.discordapp.com/attachments/391767928749686794/853499735122116628/FB_IMG_1623560580121.jpg')
        .setFooter('Sekian')

        message.channel.send(embed);
    }
}