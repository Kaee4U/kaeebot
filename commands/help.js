module.exports = {
    name:'help',
    description:'Embeds!',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ee3b3b')
        .setTitle ('INFO COMMAND')
        .setDescription ('ADA BEBERAPA COMMAND YANG BISA DIGUNAKAN')
        .addFields(
            {name:'Command 1', value:'*hai'},
            {name:'Command 2', value:'*kamuganteng'},
            {name:'Command 3', value:'*paptt'},
            {name:'Command 4', value:'*ping'}
        )
        .setImage('https://cdn.discordapp.com/attachments/391767928749686794/853499735122116628/FB_IMG_1623560580121.jpg')
        .setFooter('Sekian')

        message.channel.send(newEmbed);
    }
}