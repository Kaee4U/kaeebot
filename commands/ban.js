const {client, message, messageembed} = require("discord.js")

module.exports = {
    name: "ban",
    run: async (client, message, args) => {
        if (!message.member.permission.has("BAN_MEMBERS")) return;

        const member = message.mentions.members.first();
        if (!member) return message.reply("Tolong mention badutnya");

        if (
            message.member.roles.highest.position <= 
            member.roles.highes.position
            ) 
                return message.reply ("Role kamu terlalu rendah/sama dengan role yang ingin kamu ban");

        const reason = args.slice(1).join(" ") || "Di ban karena ga tulen";

        member.ban({reason});
        message.channel.send(`Banned ${member} for ${reason}`)
    },
};