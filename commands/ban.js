module.exports = {
    name: 'ban',
    description: "ban command!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.member.cache.get(member.id);
            memberTarger.ban();
            message.reply("Badut itu telah di ban");
        }else{
            message.reply("Kamu gabisa ban badut itu");
        }
    }
}