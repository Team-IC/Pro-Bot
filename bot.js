const { Client, Intents } = require('discord.js');
const client = new Client({
    disableEveryone: true,
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ]
});
const { token } = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);