// Extract the required classes from the discord.js module
const { Client, Attachment } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});

module.exports.help = {
    name: "attachments"
}

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDg2NjczNzcxMDk3MjI3MjY3.DtiJoQ.WA-L7C-yJzMHUAQeiFpFPQlVZZI');