module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = client.player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
          if (!queue || !queue.playing) return int.reply({ content: `Pas de musique en ce moment. ❌`, ephemeral: true, components: [] });

            int.member.send(`**Track Saved: \`${queue.current.title}\` | postée par \`${queue.current.author}\`, Serveur enregistré: \`${int.member.guild.name}\` ✅**`).then(() => {
                return int.reply({ content: `Je vous ai envoyé le nom de la musique dans un message privé ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Je ne peux pas vous envoyer un message privé. Je pense que vous avez bloqué ou avez un problème avec vos MP ❌`, ephemeral: true, components: [] });
            });
        }
    }
};