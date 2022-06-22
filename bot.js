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
            name: 'at www.exodus.com',
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

    const emojis = ['😀', '😃', '😄', '😁', '✌🏼', '💯', '🦾', '💙', '😎', '🚀', '😉', '☀️', '😊', '😇', '🤙', '🖖', '👆', '👋', '👾', '🌤', '🌈', '🌞', '✨', '💫', '🌅', '🌇', '🌄', '💎']

    return emojis[~~(Math.random() * emojis.length)]

};

const getRandomEmojiGN = () => {

    const emojis = ['🥱', '😴', '😪', '😌', '🥲', '🌝', '🌗', '🌙', '🌛', '🌚', '🌌', '🌉', '🌃', '💤'];

    return emojis[~~(Math.random() * emojis.length)]

};


//Once connected, listen for messages

//check first is mention of user. Can do for each user

//Set below allows for a timed message that only permits users to use the particular phrase and receive a response from the bot after a set time period. 

const talkedRecentlyGM = new Set();
const botCoolDownSet = new Set();


client.on('message', msg => {

    //needs the channel ID to define channel to append to startTyping method below. Cache for each channel connected. 

    let channel = client.channels.cache.get('CHANNEL ID');

    //start typing using msg from parameter, channel id and method. msg.channel.stopTyping()stops the bot from always typing and has timeout for visual effect. 

    // Ensure the message issuer is not a bot. ie. The bot does not reply to itself.

    // Use a regex and .test method to find keywords in the message from users. Exclude leters and numbers behind gm/gn as stand alone phrases. Symbols except @ OK (may be an email). i = ignore case
    // Don't forget the "y" sticky flag on regex or different words trigger gn or gm.


    return Promise.resolve()

        .then(() => {
            if (msg.author.bot) {
                return;
                msg.channel.stopTyping();
            } else if (/gm bot|\bno\b|bad|bot|don\'t|didn\'t|not|couldn\'t|wouldn\'t|horrible|awful|terrible/gi.test(msg.content)) {
                return;
            } else if (botCoolDownSet.has(msg.author.bot)) {
                if (msg.content.includes('<@980457022971600936>')) {
                    return;
                } else if (/good morning|good mornin|^gm$|^gm[^A-Za-z0-9@].*$|^mornin$|^morning$/yi.test(msg.content)) {
                    msg.react(getRandomEmojiGM());
                    return;
                } else if (/\bgm\b/gi.test(msg.content)) {
                    msg.react(getRandomEmojiGM());
                    return;
                } else if (/\bgn\b/gi.test(msg.content)) {
                    msg.react(getRandomEmojiGN());
                    return;
                } else if (/good night|goodnight|nite nite|night night|^nite$|^gn$|^gn[^A-Za-z0-9@].*$|^night$/gi.test(msg.content)) {
                    msg.react(getRandomEmojiGN());
                    return;
                } else if (/^\bnight\b.*$/gi.test(msg.content)) {
                    msg.react(getRandomEmojiGN());
                    return;
                } else if (/^\bnite\b.*$/gi.test(msg.content)) {
                    msg.react(getRandomEmojiGN());
                    return;
                } else if (/^ga$/gi.test(msg.content)) {
                    msg.react(getRandomEmojiGM());
                    return;
                } else if (/^.*\bgood afternoon\b.*$/gi.test(msg.content)) {
                    msg.react(getRandomEmojiGM());
                    return;
                } else { return; }
            } else if (/good morning|good mornin|^gm$|^gm[^A-Za-z0-9@].*$|^mornin$|^morning$/yi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GM ' + getRandomEmojiGM());
                    msg.react(getRandomEmojiGM());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/\bgm\b/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GM ' + getRandomEmojiGM());
                    msg.react(getRandomEmojiGM());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/^\bmorning\b.*$/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GM ' + getRandomEmojiGM());
                    msg.react(getRandomEmojiGM());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/^\bmornin\b.*$/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GM ' + getRandomEmojiGM());
                    msg.react(getRandomEmojiGM());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/^.*\bgood afternoon\b.*$/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GA ' + getRandomEmojiGM());
                    msg.react(getRandomEmojiGM());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/^ga$/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GA ' + getRandomEmojiGM());
                    msg.react(getRandomEmojiGM());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/good night|goodnight|nite nite|night night|^nite$|^gn$|^gn[^A-Za-z0-9@].*$|^night$/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GN ' + getRandomEmojiGN());
                    msg.react(getRandomEmojiGN());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/\bgn\b/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GN ' + getRandomEmojiGN());
                    msg.react(getRandomEmojiGN());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/^\bnight\b.*$/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GN ' + getRandomEmojiGN());
                    msg.react(getRandomEmojiGN());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            } else if (/^\bnite\b.*$/gi.test(msg.content)) {
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('GN ' + getRandomEmojiGN());
                    msg.react(getRandomEmojiGN());
                }, 2000);
                msg.channel.stopTyping();
                botCoolDownSet.add(msg.author.bot);
                setTimeout(() => {
                    botCoolDownSet.delete(msg.author.bot);
                }, 45000);
            }
        })

        // Keyword search to react with appropriate emojis. To augment, add to the keyword array and containsArray function list. 
        // "toastcoin": "\\bTOAST\\b:982680902968688711" Private server emoji. Crashes bot. 

        .then(() => {

            var coins = {
                "bitcoin": "\\bBTC\\b:844985243118075964",
                "ethereum": "\\bETH\\b:844985406893588540",
                "tether": "\\bUSDT\\b:845019577938083860",
                "usd coin": "\\bUSDC\\b:845019577971769354",
                "\\bbnb\\b": "\\bBNB\\b:844985196393791548",
                "binance usd": "\\bBUSD\\b:855533737638887474",
                "cardano": "\\bADA\\b:844985126579994675",
                "ripple": "\\bXRP\\b:845019578098909194",
                "solana": "\\bSOL\\b:845019577343148083",
                "dogecoin": "\\bDOGE\\b:844985291960877096",
                "polkadot": "\\bDOT\\b:844985291717476367",
                "wrapped bitcoin": "\\bWBTC\\b:845019578090389504",
                "trx": "\\bTRON\\b:845019577632292924",
                "dai": "\\bDAI\\b:844985243105493012",
                "avalanche": "\\bAVAX\\b:974332542075424809",
                "Shiba inu": "\\bSHIB\\b:864568404995997736",
                "polygon": "\\bMATIC\\b:849794082998190112",
                "ftx token": "\\bFTT\\b:844985406863704064",
                "litecoin": "\\bLTC\\b:845004333846102036",
                "chainlink": "\\bLINK\\b:845004333770342511",
                "uniswap": "\\bUNI\\b:845019577884999680",
                "monero": "\\bXMR\\b:845019578106642442",
                "bitcoin cash": "\\bBCH\\b:844985196197838888",
                "ethereum classic": "\\bETC\\b:844985406830149733",
                "algorand": "\\bALGO\\b:844985127071383602",
                "cosmos": "\\bATOM\\b:844985196205703249",
                "vechain": "\\bVET\\b:845019577968623646",
                "decentraland": "\\bMANA\\b:845004333955285002",
                "filecoin": "\\bFIL\\b:851920593296556065",
                "apecoin": "\\bAPE\\b:956984979865366529",
                "elrond": "\\bEGLD\\b:911036961224024136",
                "aave": "\\bAAVE\\b:844985126748422164",
                "\\beos\\b": "\\bEOS\\b:844985406981406760",
                "axie Infinity": "\\bAXS\\b:956983490623189084",
                "waves": "\\bWAVES\\b:845019577921306714",
                "pancakeswap": "\\bCAKE\\b:869618647629455430",
                "basic attention token": "\\bBAT\\b:844985195966103633",
                "hedera": "\\bHBAR\\b:845004333619347526",
                "ravencoin": "\\bRVN\\b:845004334453620816",
                "digibyte": "\\bDGB\\b:844985291868864582",
                "tezos": "\\bXTZ\\b:845019577866911786",
                "terra": "\\bLUNA\\b:954438394837106689",
                "ontology": "\\bONG\\b:845004334428061706",
                "stellar": "\\bXLM\\b:845019577942933584",
                "fantom": "\\bFTM\\b:890706727320821771",
                "enjin": "\\bENJ\\b:880573470147239956",
                "bittorrent": "\\bBTT\\b:844985243052408852",
                "graph protocol": "\\bGRT\\b:845004333169770536",
                "pax": "\\bPAX\\b:845004334403027004",
                "pax gold": "\\bPAXG\\b:845004334383366243",
                "tulip": "\\bTULIP\\b:942844733649211462",
                "audius": "\\bAUDIO\\b:950911021319614475",
                "serum": "\\bSRM\\b:845019577409732638",
                "gas token": "\\bGAS\\b:844985406951784458",
                "neo token": "\\bNEO\\b:845004334092517387",
                "orcas": "\\bORCA\\b:942844733561126942",
                "toastcoin": "\\bTOAST\\b:🍞",
                "exodus shares": "\\bEXIT\\b:989080346622586900",
                "exodus coin": "\\bEXOD\\b:989080346622586900"
            };

            for (keys in coins) {

               let coinKeys = coins[keys].split(':').shift();

               let regex = new RegExp(coinKeys, 'gi');

                if (msg.content.toLowerCase().includes('http')){
                  return;
                } else if (msg.content.toLowerCase().includes(keys) || msg.content.match(regex)) {
                        let reaction = coins[keys].split(':')[1];
                        // Use to troubleshoot -> console.log(reaction);
                        msg.react('' + reaction + '');
                }

            };

        })

        .catch(error => {
            console.log("keyword emoji content error");
            console.log(error.name);
            console.log(error.message);
        })


        //GM bot and minor support messages

        .then(() => {

            if (msg.author.bot) {
                return;
                msg.channel.stopTyping();
            } else if (/gm bot|\bno\b|bad|bot|don\'t|didn\'t|not|couldn\'t|wouldn\'t|horrible|awful|terrible/gi.test(msg.content)) {
                return;
            } else if (msg.content.toLowerCase().includes('help') && msg.content.includes('<@980457022971600936>')) {
                msg.react('⛑');
                if (talkedRecentlyGM.has(msg.author.id)) {
                    msg.channel.startTyping();
                    setTimeout(() => {
                        msg.channel.send('Hang in there <@' + msg.author + '>')
                            .then(msg => {
                                msg.delete({ timeout: 3000 })
                            })
                    }, 2000)
                    msg.channel.stopTyping();
                } else {
                    msg.channel.startTyping();
                    setTimeout(() => {
                        msg.channel.send('I\'m not programmed to assist here, but the support team is always available and will respond quickly. You can email them at example@email.com if you don\'t hear from someone here. Ping the @moderation team too or find us on Twitter. You can also check out our knowledge base at https://example.com/ for helpful tutorials.');
                    }, 2000);
                    msg.channel.stopTyping();
                    talkedRecentlyGM.add(msg.author.id);
                    setTimeout(() => {
                        // Removes the user from the set after 30 seconds
                        talkedRecentlyGM.delete(msg.author.id);
                    }, 30000);
                }
            } else if (msg.content.toLowerCase().includes('question') && msg.content.includes('<@980457022971600936>')) {
                msg.react('🤔');
                if (talkedRecentlyGM.has(msg.author.id)) {
                    msg.channel.startTyping();
                    setTimeout(() => {
                        msg.channel.send('Hang in there <@' + msg.author + '>, and try to ping @Moderation')
                            .then(msg => {
                                msg.delete({ timeout: 3000 })
                            })
                    }, 2000)
                    msg.channel.stopTyping();
                } else {
                    msg.channel.startTyping();
                    setTimeout(() => {
                        msg.channel.send('I\'m not programmed to answer questions here, but the support team is always available and will respond quickly. You can email them at example.email.com if you don\'t hear from someone here. Ping the @moderation team too or find us on Twitter. You can also check out our knowledge base at https://example.com/ for helpful tutorials.');
                    }, 2000);
                    msg.channel.stopTyping();
                    talkedRecentlyGM.add(msg.author.id);
                    setTimeout(() => {
                        // Removes the user from the set after 30 seconds
                        talkedRecentlyGM.delete(msg.author.id);
                    }, 30000);
                }
            } else if (msg.content.toLowerCase().includes('thanks') && msg.content.includes('<@980457022971600936>')) {
                msg.react('💙');
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('You\'re welcome');
                }, 2000);
                msg.channel.stopTyping();
            } else if (msg.content.toLowerCase().includes('thank you') && msg.content.includes('<@980457022971600936>')) {
                msg.react('💙');
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('You\'re welcome');
                }, 2000);
                msg.channel.stopTyping();
            } else if (msg.content.toLowerCase().includes('i love you') && msg.content.includes('<@980457022971600936>')) {
                msg.react('😉');
                msg.channel.startTyping();
                setTimeout(() => {
                    msg.channel.send('I see us as just friends tbh.');
                }, 2000);
                msg.channel.stopTyping();
            } else if (msg.content.toLowerCase().includes('ban') && msg.content.includes('<@980457022971600936>')) {
                msg.react('⛑');
                if (talkedRecentlyGM.has(msg.author.id)) {
                    msg.channel.startTyping();
                    setTimeout(() => {
                        msg.channel.send('Hang in there, <@' + msg.author + '>, and try to ping @Moderation')
                            .then(msg => {
                                msg.delete({ timeout: 3000 })
                            })
                    }, 2000)
                    msg.channel.stopTyping();
                } else {
                    msg.channel.startTyping();
                    setTimeout(() => {
                        msg.reply('I can\'t ban users but you can ping @Moderation to make sure the human mods take a care of this. Got you\'re back fam 🦾');
                    }, 2000);
                    msg.channel.stopTyping();
                    talkedRecentlyGM.add(msg.author.id);
                    setTimeout(() => {
                        // Removes the user from the set after 30 seconds
                        talkedRecentlyGM.delete(msg.author.id);
                    }, 30000);
                }
            } else if (/(?!\bhelp\b)<@980457022971600936>/gi.test(msg.content)) {
                msg.react('845024722559303720');
            }
        })

        // GM bot ID <@980457022971600936>
        // Waving exodude emoji id: '845024722559303720';

        //Add specific use mention emojis down here based on criteria. Current criteria == Lvl 20 users only. (Other ideas could be included ie. They are level 10 or they are nft contributers, ect.)

        //Exodus | SL
        .then(() => {
            if (/<@971435234061090876>/i.test(msg.content)) {
                msg.react('🚀');
            }
        })

        //Hero
        .then(() => {
            if (/<@822555592795095051>/i.test(msg.content)) {
                msg.react('🙏');
            }
        })

        //cheez #2592
        .then(() => {
            if (/<@676203286046572593>/i.test(msg.content)) {
                msg.react('🧀');
            }
        })

        //toast #0001
        .then(() => {
            if (/<@431241025856602116>/i.test(msg.content)) {
                msg.react('🍞');
            }
        })

        //Llama @LlamaBoi#1000
        .then(() => {
            if (/<@696087673198215259>/i.test(msg.content)) {
                msg.react('🦙');
            }
        })

        //tsunami#1354
        .then(() => {
            if (/<@723543656899936347>/i.test(msg.content)) {
                msg.react('🌊');
            }
        })

        //AnotherLordHere | Kuruk #2882
        .then(() => {
            if (/<@626108863472730161>/i.test(msg.content)) {
                msg.react('🐺');
            }
        })

        //Darkness#8489
        .then(() => {
            if (/<@496780002902147072>/i.test(msg.content)) {
                msg.react('845004333846102036');
            }
        })

        //Mega#4666
        .then(() => {
            if (/<@345306921596747778>/i.test(msg.content)) {
                msg.react('🎸');
            }
        })

        //#3373 (100% real exodus employee)
        .then(() => {
            if (/<@399447908237180939>/i.test(msg.content)) {
                msg.react('🦊');
            }
        })

        //@Tiny Fire#2511
        .then(() => {
            if (/<@766583495857799179>/i.test(msg.content)) {
                msg.react('🔥');
            }
        })

        //@{BB}#2022
        .then(() => {
            if (/<@216068201698557962>/i.test(msg.content)) {
                msg.react('🦾');
            }
        })

        //@Shadowhawk#1896
        .then(() => {
            if (/<@441315201581580319>/i.test(msg.content)) {
                msg.react('🦅');
            }
        })

        //@ericaltm#4662
        .then(() => {
            if (/<@135096550773751808>/i.test(msg.content)) {
                msg.react('💎');
            }
        })

        .catch(error => {
            console.log("Bummer, got an error");
            console.log(error.name);
            console.log(error.message);
        })

});