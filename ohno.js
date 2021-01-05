require("dotenv"); // Load env configuration

const Discord = require('discord.js');
const client = new Discord.Client();
let ohnoCount = 0;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.author.bot)return;
    const ohno = msg.guild.emojis.cache.find(x => x.name === "ohno")
    if (!ohno) {
        msg.guild.emojis.create("https://cdn.discordapp.com/emojis/597477759689687040.png?v=1", "ohno")
        msg.channel.send("ohno emote created")
    }
    if (msg.content.toLowerCase().includes("oh no")) {
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
