const { Player } = require('discord-player');
const { Client, Intents, Collection } = require('discord.js');
const { readdirSync } = require('fs');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = require("fs");
let client = new Client({
    intents: [
        32767
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');
client.player = new Player(client, client.config.opt.discordPlayer);
client.commands = new Collection();
const player = client.player;

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    console.log(`-> Loaded event ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
}
console.log(`-> Loaded commands...`);
readdirSync('./commands/').forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`${command.name.toLowerCase()} Load Command!`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
    }
});
player.on('error', (queue, error) => {
    console.log(`Il y avait un problème avec la file d’attente des chansons => ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`J’ai du mal à me connecter => ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`🎵 La musique a commencé à jouer : **${track.title}** -> Canal: **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**${track.title}** ajouté à la liste de lecture. ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send("Quelqu’un de la chaîne audio à laquelle j'étais connecté m’a viré, toute la playlist a été effacée ! ❌");
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('J’ai quitté le canal audio parce qu’il n’y a personne sur mon canal audio. ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Toutes les files d’attente sont terminées, je pense que vous pouvez écouter un peu plus de musique. ✅');
});

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);

if(process.env.TOKEN){
client.login(process.env.TOKEN).catch(e => {
console.log("Le jeton bot que vous avez entré dans votre projet est incorrect ou les INTENTIONS de votre robot sont ÉTEINTES!");
});
} else{
}

client.login("votre token");
