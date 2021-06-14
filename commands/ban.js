module.exports = {
    name: 'ban',
    description: "ban command!",
    run: async (client, message, args) => {
        if (!message.member.permission.has("Ban Member")) return;

        const member = message.mentions.member.first();
        if (!member) return message.reply("Tolong mention badutnya");

        if (message.member.roles.highest.position <= member.roles.highes.position) return message.reply ("Role kamu terlalu rendah/sama dengan role yang ingin kamu ban");

        const reason = args.slice(1).join(" ") || "Di ban karena ga tulen";

        member.ban({reason});
        message.channel.send(`Banned ${member} for ${reason}`)
    },
};