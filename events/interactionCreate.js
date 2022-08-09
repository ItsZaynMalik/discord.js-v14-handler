const client = require("../index");
const config = require("../config.json");
const { ApplicationCommandOptionType  } = require('discord.js')

client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isChatInputCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === ApplicationCommandOptionType.Subcommand) {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        if (cmd) {
            // User perms v14

            if (!interaction.member.permissions.has(cmd.UserPerms || [])) return interaction.followUp(`You need \`${cmd.UserPerms || []}\` Permission for this`)
            // Bot Perms v14
            if (!interaction.guild.members.me.permissions.has(cmd.BotPerms || [])) return interaction.followUp(`I need \`${cmd.BotPerms || []}\` Permission for this`)

            // owner only v14
            if (cmd.OwnerOnly && interaction.user.id !== client.config.owner ) return interaction.followUp(`This command is owner only`)
        }
        cmd.run(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.isContextMenuCommand()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});
