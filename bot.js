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


const getRandomEmojiGM = () => {
    
    const emojis = ['😀','😃','😄','😁','✌🏼','💯','🦾','🫡','💙','😎','🚀','😉','☀️','😊','😇','🤙','🖖','👆','👋','👾','🌤','🌈','🌞','⛅️','✨','💫','🌅','🌇','🌄','💎']

    return emojis[~~(Math.random() * emojis.length)]

}; 

const getRandomEmojiGN = () => {
    
    const emojis = ['🥱','😴','😪','😌','🥲','😬','🌝','🌗','🌙','🌛','🌚','🌌','🌉','🌃','💤'];

    return emojis[~~(Math.random() * emojis.length)]

};

client.on('message', msg => {


   if (msg.author.bot){ 
      return; 
   } else if(/good morning|(' '+gm(?= ))|mornin|morning/i.test(msg.content)){
      msg.reply('GM' + getRandomEmojiGM());
   } else if(/good night|nite|(' '+gn(?= ))|night/i.test(msg.content)){
      msg.reply('GN' + getRandomEmojiGN());
   } 

 //keeping the below as an easy limiter for bot activity. Limits scope of replies. 

  // if (msg.content.toLowerCase() == 'gm') {
  //   msg.reply('gm' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'gm!') {
  //   msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'gm !') {
  //   msg.reply('GM!' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'good morning') {
  //   msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'good morning !') {
  //   msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'good morning!') {
  //    msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'morning!') {
  //    msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'morning !') {
  //    msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'morning') {
  //    msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'mornin!') {
  //    msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'mornin') {
  //    msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'mornin !') {
  //    msg.reply('GM' + getRandomEmojiGM());
  // } else if(msg.content.toLowerCase() == 'gn !') {
  //   msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'gn!') {
  //   msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'gn') {
  //   msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'good night') {
  //   msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'good night !') {
  //   msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'good night!') {
  //    msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'good nite!') {
  //    msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'good nite !') {
  //    msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'good nite') {
  //    msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'nite!') {
  //    msg.reply('GN' + getRandomEmojiGN());
  // } else if(msg.content.toLowerCase() == 'nite !') {
  //    msg.reply('GN' + getRandomEmojiGN()); 
  // } else if(msg.content.toLowerCase() == 'nite') {
  //    msg.reply('GN' + getRandomEmojiGN());
  // } 


});


//client.login(process.env.DISCORD_TOKEN);

