
# GM BOT

A bot that you can use for Discord to say "GM"!

Silly project to boost server enjoyment and engagement. 

![A GM bot](https://github.com/AngelLozan/Discord-GM-bot/blob/master/gm.jpeg?raw=true)


A bot that serves up pure Alpha in your Discord. We only have Good Mornings here, so of course, the bot will pass along the positive vibes and tell you GM if you say GM! The bot is important because no one should have to go without being wished a GM. The bot is there to ensure the whole community has positive vibes and all deserving persons receive a GM in return. 

Customize the expressions captured in each regex or emojis served. 

Toward the bottom you can customize the emoji reactions the bot will react with at mentions of specific users. 

Example: 
```

//GM bot
.then(() => {
      if(/<@980467385398079488>/i.test(msg.content)){
         msg.channel.startTyping();
      setTimeout(()=>{
         msg.channel.send('Hello there');
         msg.react('👾');
      }, 1000);
      msg.channel.stopTyping();  
   } 
})

```

At mention of the GM bot it will start typing, react with the space invader on the post where the mention was made and reply in the channel "hello there" and then stop typing. Typing lasts 1 second. 


`Some notes`

- Easiest to host on Heroku. Install the Heroku CLI and push changes quickly to your server. 

- Current .env is for personal test server. You can create your own. You will need a .env file to hold the DISCORD_TOKEN= `your token`

- Dependency discord.js is lower version to ensure full functionality of bot.js file. Threw errors related to intents on higher versions. Intents listed on Developer API portal. 

- Intents in Discord API may need to be set. Different Discord.js Version also may be neccessary. 

