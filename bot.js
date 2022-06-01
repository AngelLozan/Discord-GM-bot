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

let petString = "Good morning and Gm";
let petRegex = /good morning|gm/i; // Change this line
let result = petRegex.test(petString);
console.log(result);
if(result === true){
    console.log("GM!");
}

   let morningRegex = /good morning|gm|mornin|morning/i;
   let message = morningRegex.test(msg.content);

   if(message === true){
      msg.reply('GM' + getRandomEmojiGM());
   }

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

