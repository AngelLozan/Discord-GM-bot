// Run dotenv

require('dotenv').config();
const fetch = import("node-fetch");
const humanizeDuration = require('humanize-duration');



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
        url: 'https://www.bytebuilder.org/'
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

const talkedRecentlyGM = new Set();

//Once connected, listen for messages

//Uses promise to ensure multiple mention/regex matches populate all possible scenarios with appropirate message and emoji reaction from bot. 

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
   } else if(/^gm bot$|^no$|bad|didn\'t|^not$|couldn\'t|wouldn\'t|horrible|awful|terrible/gi.test(msg.content)){
      return;
   }  else if(/good morning|good mornin|^gm$|^gm[^A-Za-z0-9@].*$|^mornin$|^morning$/yi.test(msg.content)){
      if (talkedRecentlyGM.has(msg.author.id)) {
            msg.channel.startTyping();
            setTimeout(()=>{
            msg.channel.send('Wait ~30 seconds before switching timezones or trying again, ok'+'<@'+ msg.author +'>'+'?');
            }, 2000)
            .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        })
      msg.channel.stopTyping();
     } else {
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GM ' + getRandomEmojiGM());
         msg.react(getRandomEmojiGM());
      }, 2000);
      msg.channel.stopTyping();
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000); 

     }
   } else if(/\bgm\b/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GM ' + getRandomEmojiGM());
         msg.react(getRandomEmojiGM());
      }, 2000);
      msg.channel.stopTyping(); 
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000);
   } else if(/^\bmorning\b.*$/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GM ' + getRandomEmojiGM());
         msg.react(getRandomEmojiGM());
      }, 2000);
      msg.channel.stopTyping();
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000); 
   } else if(/^\bmornin\b.*$/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GM ' + getRandomEmojiGM());
         msg.react(getRandomEmojiGM());
      }, 2000);
      msg.channel.stopTyping();
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000);  
   } else if(/^.*\bgood afternoon\b.*$/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('Good Afternoon ' + getRandomEmojiGM());
         msg.react(getRandomEmojiGM());
      }, 2000);
      msg.channel.stopTyping();
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000);  
   } else if(/^ga$/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('Good Afternoon ' + getRandomEmojiGM());
         msg.react(getRandomEmojiGM());
      }, 2000);
      msg.channel.stopTyping();
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000);  
   } else if(/good night|goodnight|nite nite|night night|^nite$|^gn$|^gn[^A-Za-z0-9@].*$|^night$/gi.test(msg.content)){
      msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GN ' + getRandomEmojiGN());
         msg.react(getRandomEmojiGN());
      }, 2000);
      msg.channel.stopTyping();
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000); 
   } else if(/\bgn\b/gi.test(msg.content)){
       msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GN ' + getRandomEmojiGN());
         msg.react(getRandomEmojiGN());
      }, 2000);
      msg.channel.stopTyping();
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000); 
   } else if(/^\bnight\b.*$/gi.test(msg.content)){
       msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GN ' + getRandomEmojiGN());
         msg.react(getRandomEmojiGN());
      }, 2000);
      msg.channel.stopTyping(); 
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000);
   } else if(/^\bnite\b.*$/gi.test(msg.content)){
       msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('GN ' + getRandomEmojiGN());
         msg.react(getRandomEmojiGN());
      }, 2000);
      msg.channel.stopTyping();
      talkedRecentlyGM.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecentlyGM.delete(msg.author.id);
        }, 30000); 
   } 
})
   

//Add specific use mention emojis down here based on criteria (ie. They are level 20 or they are nft contributers, ect.)

//User needs to be formatted as ID. so copy id and put between <@ > in regex test. 

.then(() => {
      if(/<@841402856497610772>/i.test(msg.content)){
         msg.react('🚀');
   } 
})

// messages to the GM bot. You can add support messages for keywords too if the bot is directly mentioned with the keyword.

.then(() => {
   if(msg.content.toLowerCase().includes('help') && msg.content.includes('<@980467385398079488>')) {
       msg.react('⛑');
       msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('I\'m not programmed to assist here, but the support team is always available and will respond quickly. You can email them at example@email.com if you don\'t hear from someone here. Ping the @moderation team too or find us on Twitter. You can also check out our knowledge base at https://example.com/ for helpful tutorials.' );
      }, 2000);
      msg.channel.stopTyping();  
   } else if(msg.content.toLowerCase().includes('question') && msg.content.includes('<@980467385398079488>')) {
       msg.react('🤔');
       msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('I\'m not programmed to answer questions here, but the support team is always available and will respond quickly. You can email them at example.email.com if you don\'t hear from someone here. Ping the @moderation team too or find us on Twitter. You can also check out our knowledge base at https://example.com/ for helpful tutorials.' );
      }, 2000);
      msg.channel.stopTyping();  
   } else if(/gm bot|^no$|bad|didn\'t|^not$|couldn\'t|wouldn\'t|horrible|awful|terrible/gi.test(msg.content)){
      return;
   } else if(msg.content.toLowerCase().includes('thanks') && msg.content.includes('<@980467385398079488>')) {
         msg.react('💙');
         msg.channel.startTyping();
         setTimeout(() => {
            msg.channel.send('You\'re welcome');
         }, 2000);
         msg.channel.stopTyping();
   } else if(msg.content.toLowerCase().includes('thank you') && msg.content.includes('<@980467385398079488>')) {
         msg.react('💙');
         msg.channel.startTyping();
         setTimeout(() => {
            msg.channel.send('You\'re welcome');
         }, 2000);
         msg.channel.stopTyping();
   } else if(msg.content.toLowerCase().includes('i love you') && msg.content.includes('<@980467385398079488>')) {
         msg.react('😉');
         msg.channel.startTyping();
         setTimeout(() => {
            msg.channel.send('I see us as just friends tbh.');
         }, 2000);
         msg.channel.stopTyping();
   } else if(/(?!\bhelp\b)<@980467385398079488>/gi.test(msg.content)){
         msg.react('👾');
   } 
})

.catch(error => {
  console.log( "Bummer, got an error" );
  console.log( error.name );
  console.log( error.message );
})

});




