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

    const emojis = ['😀', '😃', '😄', '😁', '✌🏼', '💯', '🦾', '🫡', '💙', '😎', '🚀', '😉', '☀️', '😊', '😇', '🤙', '🖖', '👆', '👋', '👾', '🌤', '🌈', '🌞', '✨', '💫', '🌅', '🌇', '🌄', '💎']

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

        .then(() => {

            var coins = {
                "bitcoin": "BTC:844985243118075964",
                "ethereum": "ETH:844985406893588540",
                "tether": "USDT:845019577938083860",
                "usd coin": "USDC:845019577971769354",
                "bnb": "BNB:844985196393791548",
                "binance usd": "BUSD:855533737638887474",
                "cardano": "ADA:844985126579994675",
                "ripple": "XRP:845019578098909194",
                "solana": "SOL:845019577343148083",
                "dogecoin": "DOGE:844985291960877096",
                "polkadot": "DOT:844985291717476367",
                "wrapped Bitcoin": "WBTC:845019578090389504",
                "tron": "TRX:845019577632292924",
                "dai": "DAI:844985243105493012",
                "avalanche": "AVAX:974332542075424809",
                "Shiba inu": "SHIB:864568404995997736",
                "polygon": "MATIC:849794082998190112",
                "ftx Token": "FTT:844985406863704064",
                "litecoin": "LTC:845004333846102036",
                "chainlink": "LINK:845004333770342511",
                "uniswap": "UNI:845019577884999680",
                "monero": "XMR:845019578106642442",
                "bitcoin cash": "BCH:844985196197838888",
                "ethereum classic": "ETC:844985406830149733",
                "algorand": "ALGO:844985127071383602",
                "cosmos": "ATOM:844985196205703249",
                "vechain": "VET:845019577968623646",
                "decentraland": "MANA:845004333955285002",
                "filecoin": "FIL:851920593296556065",
                "apecoin": "APE:956984979865366529",
                "elrond": "EGLD:911036961224024136",
                "aave": "AAVE:844985126748422164",
                "eos": "EOS:844985406981406760",
                "axie Infinity": "AXS:956983490623189084",
                "waves": "WAVES:845019577921306714",
                "pancakeswap": "CAKE:869618647629455430",
                "basic attention token": "BAT:844985195966103633",
                "hedera": "HBAR:845004333619347526",
                "ravencoin": "RVN:845004334453620816",
                "digibyte": "DGB:844985291868864582",
                "tezos": "XTZ:845019577866911786",
                "terra": "LUNA:954438394837106689",
                "ontology": "ONG:845004334428061706",
                "stellar": "XLM:845019577942933584",
                "fantom": "FTM:890706727320821771",
                "enjin": "ENJ:880573470147239956",
                "bittorrent": "BTT:844985243052408852",
                "graph protocol": "GRT:845004333169770536"
            };

            for (keys in coins) {
                if (msg.content.toLowerCase().includes(keys) || msg.content.toUpperCase().includes(coins[keys].split(':').shift())) {
                    let reaction = coins[keys].split(':')[1];
                    // Use to troubleshoot -> console.log(reaction);
                    msg.react('' + reaction + '');
                    break
                }
            };

        })

        .catch(error => {
            console.log("keyword emoji content error");
            console.log(error.name);
            console.log(error.message);
        })

        //Add specific use mention emojis down here based on criteria (ie. They are level 20 or they are nft contributers, ect.)

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