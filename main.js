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
    }
    if (command === 'hai'){
        client.commands.get('hai').execute(message, args);
    }
    if (command === 'kamuganteng'){
        client.commands.get('kamuganteng').execute(message, args);
    }
    if (command === 'paptt'){
        client.commands.get('paptt').execute(message, args);
    } 
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }
    if(command === 'ban'){
        client.commands.get('ban').execute(client, message, args);
    }
  


});

client.login('ODUzNDYzNzA2NzMyODU1MzQ3.YMVwBA.KO2yFmZYqDBiFrM2Lg3TljAs1gY');