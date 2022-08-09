const { Client, EmbedBuilder, ChatInputCommandInteraction, ApplicationCommandType, ApplicationCommandOptionType  } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: ApplicationCommandType.ChatInput,
    options: [],
    /**
     *
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({
             embeds: [
               new EmbedBuilder()
               .addFields([
                {
                    name: `Ping :`,
                    value: `${client.ws.ping}ms`,
                }
               ])
             ]
             });
    },
};
