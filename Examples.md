# Slash command example : 

```js
const { Client, EmbedBuilder, ChatInputCommandInteraction, ApplicationCommandType, ApplicationCommandOptionType  } = require("discord.js");

module.exports = {
    name: "",
    description: "",
    type: ApplicationCommandType.ChatInput,
    UserPerms: [],
    BotPerms: [],
    OwnerOnly: false,
    options: [
        {
            name: '',
            type: ApplicationCommandOptionType,
            description: '',
            required: 
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
    },
};
```

# Message command example :

```js

const { Client, Message, EmbedBuilder } = require("discord.js")


module.exports = {
    name: "",
    aliases: [''],
    description: '',
    usage: '',
    UserPerms: [],
    BotPerms: [],
    OwnerOnly: false,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {


    }
}

```