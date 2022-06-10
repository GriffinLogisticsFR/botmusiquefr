module.exports = {
    name: 'save',
    aliases: [],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

  if (!queue || !queue.playing) return message.channel.send(`${message.author}, Il n’y a pas de musique actuellement !. ❌`);

        message.author.send(`Registered track: **${queue.current.title}** | ${queue.current.author}, Serveur enregistré: **${message.guild.name}** ✅`) .then(() => {
            message.channel.send(`J’ai envoyé le nom de la musique par message privé. ✅`);
        }).catch(error => {
            message.channel.send(`${message.author}, Impossible de vous envoyer un message privé. ❌`);
        });
    },
};