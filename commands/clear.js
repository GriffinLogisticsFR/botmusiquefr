module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Pas de musique en ce moment. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, Il n’y a aucune musique dans la file d’attente après la musique actuelle ❌`);

        await queue.clear();

        message.channel.send(`La file d’attente vient d’être vidée. 🗑️`);
    },
};