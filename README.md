
*GM BOT*

A bot that you can use for Discord to say "GM"!

![A GM bot](https://github.com/ScottLozano/Discord-GM-bot/blob/master/gm.jpeg?raw=true)


A bot that serves up pure Alpha on the Exodus channel. We only have Good Mornings here, so of course, the bot will pass along the positive vibes and tell you GM if you say GM! The bot is important because no one should have to go without being wished a GM. The bot is there to ensure the whole community has positive vibes and all deserving persons receive a GM in return. 

`Some notes`

- Hosted in Heroku.

- On the "Resources" tab in Heroku, make sure the worker dyno toggle is on for the worker defined in the Procfile. 

- See Procfile for details.

- Current .env is for personal test server. You can create your own. You will need a .env file to hold the DISCORD_TOKEN= `your token`

- Dependency discord.js is lower version to ensure full functionality of bot.js file. Threw errors related to intents on higher versions. Intents listed on Developer API portal. 