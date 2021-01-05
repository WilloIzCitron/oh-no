require("dotenv"); // Load env configuration

const Discord = require('discord.js');
const client = new Discord.Client();

let ohnoCount = 0;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(msg.content.toLowerCase().includes("oh no")){
		msg.react('<:ohno:597477759689687040>');
		ohnoCount++;
		client.user.setPresence({
			activity: { 
				name: `${ohnoCount} <:ohno:597477759689687040>`
			},
			status: 'online'
		})
	}
});

client.login(process.env.ohno_BOT_TOKEN);
