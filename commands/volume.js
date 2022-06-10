const maxVol = require("../../config.js").opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Il n’y a pas de musique actuellement !. ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Current volume: **${queue.volume}** 🔊\n**Pour modifier le volume, avec \`1\` to \`${maxVol}\` Saisissez un nombre entre les deux.**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, Le volume que vous souhaitez modifier est déjà le volume actuel ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, **Tapez un chiffre de \`1\` to \`${maxVol}\` pour modifier le volume.** ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Volume modifié: **%${vol}**/**${maxVol}** 🔊` : `${message.author}, Quelque chose a mal tourné. ❌`) ;
    },
};