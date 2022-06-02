// Run dotenv

require('dotenv').config();

//Method for connecting using discord.js api

const Discord = require('discord.js');
const client = new Discord.Client();

// Connect to server and set status to display under bot

client.on('ready', () => {
   client.user.setPresence({
    status: 'online',
    activity: {
        name: 'with good vibes',
        type: 'WATCHING',
        url: 'https://www.exodus.com/'
    }
})
    console.log(`Logged in as ${client.user.tag}!`);
});

//initialize bot connect to servers and activate

client.login(process.env.DISCORD_TOKEN);

//Random emoji functions! Cater the emoji list to your liking. Morning emojis on top list "getRandomEmojiGM"

const getRandomEmojiGM = () => {
    
    const emojis = ['😀','😃','😄','😁','✌🏼','💯','🦾','🫡','💙','😎','🚀','😉','☀️','😊','😇','🤙','🖖','👆','👋','👾','🌤','🌈','🌞','⛅️','✨','💫','🌅','🌇','🌄','💎']

    return emojis[~~(Math.random() * emojis.length)]

}; 

const getRandomEmojiGN = () => {
    
    const emojis = ['🥱','😴','😪','😌','🥲','🌝','🌗','🌙','🌛','🌚','🌌','🌉','🌃','💤'];

    return emojis[~~(Math.random() * emojis.length)]

};


//Once connected, listen for messages

client.on('message', msg => {
   client.channels.cache.get('CHANNEL ID');
// Ensure the message issuer is not a bot. ie. The bot does not reply to itself.

// Use a regex and .test method to find keywords in the message from users. Exclude leters and numbers behind gm/gn as stand alone phrases. Symbols except @ OK (may be an email). i = ignore case
// Don't forget the "y" sticky flag on regex or different words trigger gn or gm.


   if (msg.author.bot){ 
      return; 
   } else if(/good morning|good mornin|^gm$|^gm[^A-Za-z0-9@].*$|mornin|morning/yi.test(msg.content)){
      channel.sendTyping().then(msg.reply('GM' + getRandomEmojiGM()));
   } else if(/\bgm\b/gi.test(msg.content)){
      msg.reply('GM' + getRandomEmojiGM());
   } else if(/\bmorning\b/gi.test(msg.content)){
      msg.reply('GM' + getRandomEmojiGM());
   } else if(/\bmornin\b/gi.test(msg.content)){
      msg.reply('GM' + getRandomEmojiGM());
   } else if(/good afternoon|afternoon/yi.test(msg.content)){
      msg.reply('good afternoon' + getRandomEmojiGM());
   } else if(/good night|nite|^gn$|^gn[^A-Za-z0-9@].*$|night/yi.test(msg.content)){
      msg.reply('GN' + getRandomEmojiGN());
   } else if(/\bgn\b/gi.test(msg.content)){
      msg.reply('GN' + getRandomEmojiGN());
   } else if(/\bnight\b/gi.test(msg.content)){
      msg.reply('GN' + getRandomEmojiGN());
   } else if(/\bnite\b/gi.test(msg.content)){
      msg.reply('GN' + getRandomEmojiGN());
   }


});




