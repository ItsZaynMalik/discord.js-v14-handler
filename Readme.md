# V14 Handler


> Its just a simple handler for V14.

> Its originated by reconlx. I updated his v13 handler to v14.


- Added UserPermission / BotPermission Options.
- Examples of Slash and Message commands available.

If you found any bugs, please open an issue.


You can simply fill the config.json with your own values. Also go to ./handler/index.js and change line 44 to this if you wanna make the slash command work in only one server. By default it works in all servers. :
```js
await client.guilds.cache
            .get("replace this with your guild id")
            .commands.set(arrayOfSlashCommands);
``` 


- See the further changes in the [V14 Guide](https://discordjs.guide/additional-info/changes-in-v14.html#enum-values).