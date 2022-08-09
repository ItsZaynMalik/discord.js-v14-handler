const client = require("../index");

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    if (command) {
        // User perms
        if (!message.member.permissions.has(command.UserPerms || [])) return message.channel.send(`You need \`${command.UserPerms || []}\` Permission for this`) // Added this

        // Bot Perms
        if (!message.guild.members.me.permissions.has(command.BotPerms || [])) return message.channel.send(`I need \`${command.BotPerms || []}\` Permission for this`)

        // owner only
        if (command.OwnerOnly && message.author.id !== client.config.owner) return message.channel.send(`This command is owner only`)

    }
    await command.run(client, message, args);
});
