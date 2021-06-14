module.exports = {
    name: 'ban',
    description: "ban command!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.reply("Badut itu telah di ban");
        }else{
            message.reply("Kamu gabisa ban badut itu");
        }
        var role = message.member.role.cache.find(r => r.name === "CEO")
        if(!role){
            return message.reply("Kamu gapunya akses untuk ban");
        }
    }
}