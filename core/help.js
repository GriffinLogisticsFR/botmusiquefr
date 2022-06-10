const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('#ff0000');
        embed.setTitle(client.user.username);
        embed.setThumbnail(client.user.displayAvatarURL())
        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription(`";help": pour savoir mes diverses commande,\n";ping": pour savoir ma latence,\n";back"\n";clear"\n";filter"\n";loop"\n";nowplaying"\n";pause"\n";play"\n";progress"\n";queue"\n";resume"\n";save"\n";search"\n";skip"\n";stop"\n";volume"\nEn cas de problème quelconque, nous avons un serveur discord nous vous laissons rejoindre notre grande communauté.: https://discord.gg/vwcsV5QaPk`) ;
        embed.setTimestamp();
        embed.setFooter("Music Bot Commands - Crée par Road Rider's", message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};
