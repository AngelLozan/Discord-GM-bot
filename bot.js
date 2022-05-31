// Run dotenv

require('dotenv').config();

//Method for connecting using discord.js api

const Discord = require('discord.js');
const client = new Discord.Client();

// Connect to server

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//initialize bot connect to servers and activate

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
  if (msg.content.toLowerCase() == 'gm') {
    msg.reply('gm ☀️');
  } else if(msg.content.toLowerCase() == 'gm!') {
    msg.reply('GM 👋🏼');
  } else if(msg.content.toLowerCase == 'gm !') {
    msg.reply('GM! 🫡');
  } else if(msg.content.toLowerCase() == 'good morning') {
    msg.reply('GM 👾');
  } else if(msg.content.toLowerCase() == 'good morning !') {
    msg.reply('GM 👆🏼');
  } else if(msg.content.toLowerCase() == 'good morning!') {
     msg.reply('GM 🤗');
  } else if(msg.content.toLowerCase() == 'gn !') {
    msg.reply('GN ✌🏼');
  } else if(msg.content.toLowerCase() == 'gn!') {
    msg.reply('GN 😴');
  } else if(msg.content.toLowerCase() == 'gn') {
    msg.reply('GN 🥱');
  } 

  // else if(msg.content == 'gM') {
  //   msg.reply('GM 😁');
  // } else if(msg.content == 'Gm') {
  //   msg.reply('GM 😎');
  // } else if(msg.content == 'Gm!') {
  //   msg.reply('GM 😌');
  // }  else if(msg.content == 'good morning') {
  //   msg.reply('GM 🤩');
  // } else if(msg.content == 'Good Morning') {
  //   msg.reply('GM 💙');
  // } else if(msg.content == 'good morning!') {
  //   msg.reply('GM 🖖🏽');
  // } else if(msg.content == 'Good morning!') {
  //   msg.reply('GM 💯');
  // }  else if(msg.content == 'good morning!') {
  //   msg.reply('GM 🫵🏻');
  // } 

  // else if(msg.content == 'GN') {
  //   msg.reply('GN 😪');
  // } else if(msg.content == 'GM !') {
  //   msg.reply('GM 🤙🏽');
  // } else if(msg.content == 'gn') {
  //   msg.reply('GN 😴');
  // } else if(msg.content == 'Gn') {
  //   msg.reply('GN 🫶🏻');
  // } 
});


//client.login(process.env.DISCORD_TOKEN);

