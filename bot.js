// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//initialize bot connect to servers

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
  } else if(msg.content == 'Gm!') {
    msg.reply('GM 😌');
  } else if(msg.content == 'gM!') {
    msg.reply('GM ✌🏼');
  } else if(msg.content == 'gm!') {
    msg.reply('GM 🦾');
  } else if(msg.content == 'good morning') {
    msg.reply('GM 🤩');
  } else if(msg.content == 'Good Morning') {
    msg.reply('GM 💙');
  } else if(msg.content == 'good morning!') {
    msg.reply('GM 🖖🏽');
  } else if(msg.content == 'Good morning!') {
    msg.reply('GM 💯');
  } else if(msg.content == 'Good Morning!') {
    msg.reply('GM 🤗');
  } else if(msg.content == 'good Morning!') {
    msg.reply('GM 👆🏼');
  } else if(msg.content == 'good Morning') {
    msg.reply('GM 🫵🏻');
  } else if(msg.content == 'Good morning') {
    msg.reply('GM 👾');
  } else if(msg.content == 'GN') {
    msg.reply('GN 😪');
  } else if(msg.content == 'GM !') {
    msg.reply('GM 🤙🏽');
  } else if(msg.content == 'gn') {
    msg.reply('GN 😴');
  } else if(msg.content == 'Gn') {
    msg.reply('GN 🫶🏻');
  } else if(msg.content.toLowerCase() == 'gn') {
    msg.reply('GN 🥱');
  } 
});


//client.login(process.env.DISCORD_TOKEN);

