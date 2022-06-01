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
   } else if(/good morning|^gm$|^gm!|mornin|morning/i.test(msg.content)){
      msg.reply('GM' + getRandomEmojiGM());
   } else if(/good night|nite|^gn$|^gn!|night/i.test(msg.content)){
      msg.reply('GN' + getRandomEmojiGN());
   }


});


//client.login(process.env.DISCORD_TOKEN);

