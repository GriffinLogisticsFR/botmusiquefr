const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

 
if (!queue || !queue.playing) return message.channel.send(`${message.author}, Il n’y a pas de musique actuellement !. ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, Vous devez d’abord désactiver le mode boucle de la musique existante **(${client.config.px}loop)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inactive' : 'Active'}**, Toute la séquence se répétera sans arrêt 🔁` : `${message.author}, Quelque chose s'est mal passé. ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, En mode Boucle, vous devez d’abord désactiver la file d’attente existante **(${client.config.px}loop queue)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inactive' : 'Active'}**, La musique actuelle sera répétée sans arrêt (toute la musique dans la liste **${client.config.px}loop queue**  Vous pouvez le répéter avec l’option.) 🔂` : `${message.author}, quelque chose a mal tourné ❌`);
};
    },
};