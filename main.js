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

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
   
  
});

client.login('ODUzNDYzNzA2NzMyODU1MzQ3.YMVwBA.KO2yFmZYqDBiFrM2Lg3TljAs1gY');