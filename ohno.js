require("dotenv"); // Load env configuration

const Discord = require('discord.js');
const client = new Discord.Client();
const ohno = message.guild.emojis.cache.find(x => x.name === "ohno")
let ohnoCount = 0;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(msg.content.toLowerCase().includes("oh no")){
		msg.react(ohno);
		ohnoCount++;
		client.user.setPresence({
			activity: { 
				name: `${ohnoCount} oh no`
			},
			status: 'online'
		})
	}
});

client.login(process.env.ohno_BOT_TOKEN);
