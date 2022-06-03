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

//check first is mention of user. Can do for each user

//const cheez = await 


//


client.on('message', msg => {
   
//needs the channel ID to define channel to append to startTyping method below. Cache for each channel connected. 

  let channel = client.channels.cache.get('CHANNEL ID');

//start typing using msg from parameter, channel id and method. msg.channel.stopTyping()stops the bot from always typing and has timeout for visual effect. 

// Ensure the message issuer is not a bot. ie. The bot does not reply to itself.

// Use a regex and .test method to find keywords in the message from users. Exclude leters and numbers behind gm/gn as stand alone phrases. Symbols except @ OK (may be an email). i = ignore case
// Don't forget the "y" sticky flag on regex or different words trigger gn or gm.
return Promise.resolve()
   .then(() => {
      if (msg.author.bot){ 
      return;
      msg.channel.stopTyping(); 
   } else if(/good morning|good mornin|^gm$|^gm[^A-Za-z0-9@].*$|mornin|morning/yi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GM' + getRandomEmojiGM());
      }, 1000);
      msg.channel.stopTyping(); 
   } else if(/\bgm\b/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GM' + getRandomEmojiGM());
      }, 1000);
      msg.channel.stopTyping(); 
   } else if(/\bmorning\b/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GM' + getRandomEmojiGM());
      }, 1000);
      msg.channel.stopTyping(); 
   } else if(/\bmornin\b/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GM' + getRandomEmojiGM());
      }, 1000);
      msg.channel.stopTyping(); 
   } else if(/good afternoon|afternoon/yi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('Good Afternoon' + getRandomEmojiGM());
      }, 1000);
      msg.channel.stopTyping(); 
   } else if(/good night|nite|^gn$|^gn[^A-Za-z0-9@].*$|night/yi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GN' + getRandomEmojiGN());
      }, 1000);
      msg.channel.stopTyping(); 
   } else if(/\bgn\b/gi.test(msg.content)){
       msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GN' + getRandomEmojiGN());
      }, 1000);
      msg.channel.stopTyping(); 
   } else if(/\bnight\b/gi.test(msg.content)){
       msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GN' + getRandomEmojiGN());
      }, 1000);
      msg.channel.stopTyping(); 
   } else if(/\bnite\b/gi.test(msg.content)){
       msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GN' + getRandomEmojiGN());
      }, 1000);
      msg.channel.stopTyping(); 
   } 

   })
   
   .then(() => {
      if(/<@841402856497610772>/i.test(msg.content)){
         msg.react('🦾');
   } 
})

   .then(() => {
      if(/<@980467385398079488>/i.test(msg.content)){
         msg.react('👾');
   } 
});
  

   // if(/\bCheez\b/gi.test(msg.content)){
   //       msg.react('🧀');
   // } 


});




