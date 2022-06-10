module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Il n’y a pas de musique actuellement !. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `La musique actuellement en cours de lecture nommé **${queue.current.title}** a cessé ✅` : `${message.author}, quelque chose a mal tourné. ❌`);
    },
};