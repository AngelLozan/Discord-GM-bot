// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
  if (msg.content == 'gm') {
    msg.reply('gm ☀️');
  } else if(msg.content == 'GM') {
    msg.reply('GM 👋🏼');
  } else if(msg.content == 'GM!') {
    msg.reply('GM! 🫡');
  } else if(msg.content == 'gM') {
    msg.reply('GM 😁');
  } else if(msg.content == 'Gm') {
    msg.reply('GM 😎');
  }
});

//initialize bot connect to servers

client.login(process.env.DISCORD_TOKEN);

