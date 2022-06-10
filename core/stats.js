const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'stats',
    aliases: [],
    showHelp: false,
    utilisation: `{prefix}stats`,

    execute(client, message, args) {
        const embed = new MessageEmbed();
            embed.setColor('RANDOM');
            embed.setTitle("Bot's Live Status");
            embed.addField(" \u200B ", "**Channels** : ` " + `${client.channels.cache.size}` + " `");
            embed.addField(" \u200B ", "**Servers** : ` " + `${client.guilds.cache.size}` + " `");
            embed.addField(" \u200B ", "**Users** : ` " + `${client.users.cache.size}` + " `");
        	embed.setTimestamp();
        	embed.setFooter("Music Bot Commands - Crée par Road Rider's", message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    }
};