//|||||||||||||||||||||||WEB|||||||||||||||||||||||

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//|||||||||||||||||||||||BOT|||||||||||||||||||||||

require("dotenv"); // Load env configuration

const Discord = require('discord.js');
const client = new Discord.Client();
let ohnoCount = 0;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.bot) return;
    const ohno = msg.guild.emojis.cache.find(x => x.name === "ohno")
    if (msg.content.toLowerCase().includes("oh no")) {
        if (!ohno) {
            if (msg.guild.emojis.cache.size > 100) {
                return
            }
            msg.guild.emojis.create("https://cdn.discordapp.com/emojis/597477759689687040.png?v=1", "ohno")
            msg.channel.send("ohno emote created")
        } else {
            msg.react(ohno);
            ohnoCount++;
            client.user.setPresence({
                activity: {
                    name: `Over ${ohnoCount} oh nos`,
                    type: 'WATCHING'
                },
                status: 'online'
            })
        }
    }
});

client.login(process.env.ohno_BOT_TOKEN);
