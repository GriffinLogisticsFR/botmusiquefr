module.exports = {
    name: 'stop',
    aliases: ['st'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Il n’y a pas de musique actuellement !. ❌`);

        queue.destroy();

        message.channel.send(`La musique diffusée sur ce serveur a été désactivée, à la prochaine ✅`);
    },
};