const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*';

const fs = require('fs');
const { type } = require('os');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Teman Kaee is online!');
    client.user.setActivity('Kaee', {
        type: 'WATCHING'
    }).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'hai'){
        client.commands.get('hai').execute(message, args);
    } else if (command === 'kamuganteng'){
        client.commands.get('kamuganteng').execute(message, args);
    } else if (command === 'paptt'){
        client.commands.get('paptt').execute(message, args);
    } 
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }else if(command === 'ban'){
        var role = message.member.roles.cache.find(r => r.name === "CEO")
    }else if(!role){
        return message.reply("Kamu gapunya akses buat ban member")
    }else {
        const userBan = message.mentions.first();

        if(userBan){
            const memberBan = message.guild.member(userBan);

            if(memberBan){
                memberBan.ban({
                    reason: 'Kamu tidak mematuhi rules'
                }).then(() => {
                    message.reply(`${userBan} sudah berhasil di ban kakak`);
                }).catch(console.error);
            }else {
                message.reply("Badut tersebut tidak ada di server ini");
            }
        }else {
            message.reply("Silahkan mention badut yang di ban");
        }
    }
  


});

client.login('ODUzNDYzNzA2NzMyODU1MzQ3.YMVwBA.KO2yFmZYqDBiFrM2Lg3TljAs1gY');