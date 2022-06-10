module.exports = async (client) => {
    console.log(`${client.user.username} Login!`);
		let servers = await client.guilds.cache.size
    	let servercount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0 )
		client.channels.cache.get('983531874787950622').send(`Bonjour je suis ${client.user.username}, j'ai reçu une petite mise à jour, rebonjour.`)
    	const activites = [
        	`;help`,
            `${client.guilds.cache.size} servers`,
        	`Regarde ${servercount} membres`,
            `Invite moi !`,
            `Merci de m'avoir dans votre serveur ❤`
    	]

    	setInterval(() => {
        	const status = activites[Math.floor(Math.random() * activites.length)]
        	client.user.setActivity(status, {
      type: "WATCHING"
    })
    	}, 15000)
	}
    