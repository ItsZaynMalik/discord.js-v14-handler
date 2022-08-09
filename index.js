const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
    partials: [
        Partials.Message,
        Partials.Channel, 
        Partials.GuildMember, 
        Partials.Reaction,
        Partials.GuildScheduledEvent, 
        Partials.User,
    ],
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.GuildIntegrations, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildMessageReactions, 
        GatewayIntentBits.GuildMessageTyping, 
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions, 
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent, 
    ],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(client.config.token);